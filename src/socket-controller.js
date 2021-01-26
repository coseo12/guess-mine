import events from './events';
import { chooseWords } from './words';

let sockets = [];
let inProgress = false;
let word = null;
let leader = null;
let timeout = null;

const DELAY_TIME = 5000;
const GAME_TIME = 30 * 1000;

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];

const socketContriller = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);

  const startGame = () => {
    if (sockets.length >= 2) {
      if (inProgress === false) {
        inProgress = true;
        leader = chooseLeader();
        word = chooseWords();
        superBroadcast(events.gameStarting);
        setTimeout(() => {
          superBroadcast(events.gameStarted);
          io.to(leader.id).emit(events.leaderNotif, { word });
          timeout = setTimeout(() => {
            endGame();
          }, GAME_TIME);
        }, DELAY_TIME);
      }
    }
  };

  const endGame = () => {
    inProgress = false;
    superBroadcast(events.gameEnded);
    if (timeout) {
      clearTimeout(timeout);
    }
    setTimeout(() => {
      startGame();
    }, DELAY_TIME);
  };

  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });

  const addPoints = id => {
    sockets = sockets.map(socket => {
      if (socket.id === id) {
        socket.points += 10;
      }
      return socket;
    });
    sendPlayerUpdate();
    endGame();
    clearTimeout(timeout);
  };

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, points: 0, nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    startGame();
  });
  socket.on(events.disconnect, () => {
    sockets = sockets.filter(aSocket => aSocket.id !== socket.id);
    if (sockets.length === 1 || socket.id === leader?.id) {
      endGame();
    }
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });
  socket.on(events.sendMsg, ({ message }) => {
    if (message === word) {
      superBroadcast(events.newMsg, {
        message: `Winner is ${socket.nickname}, word was: ${word} `,
        nickname: 'Bot',
      });
      addPoints(socket.id);
    } else {
      broadcast(events.newMsg, { message, nickname: socket.nickname });
    }
  });
  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );
  socket.on(events.strokePath, ({ x, y, color }) => {
    broadcast(events.strokedPath, { x, y, color });
  });
  socket.on(events.fill, ({ color }) => {
    broadcast(events.filled, { color });
  });
};

export default socketContriller;
