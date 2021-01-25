import events from './events';

const socketContriller = socket => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    socket.broadcast.emit(events.newUser, { nickname });
  });
};

export default socketContriller;
