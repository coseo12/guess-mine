import { disableChat, enableChat } from './chat';
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showControls,
} from './paint';

const board = document.querySelector('#jsPBoard');
const notifs = document.querySelector('#jsNotifs');

const addPlayers = players => {
  board.innerHTML = '';
  players.forEach(player => {
    const playerEl = document.createElement('span');
    playerEl.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerEl);
  });
};

const setNotifis = text => {
  notifs.innerText = '';
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const handleGameStarted = () => {
  setNotifis('');
  disableCanvas();
  hideControls();
};

export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  setNotifis(`You are the leader, paint: ${word}`);
};

export const handleGameEnded = () => {
  setNotifis('Game Ended');
  disableCanvas();
  hideControls();
  enableChat();
  resetCanvas();
};

export const handleGameStarting = () => {
  setNotifis('Game will start soon');
};
