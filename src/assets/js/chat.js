import { getSocket } from './sockets';

const messages = document.querySelector('#jsMessages');
const sendMsg = document.querySelector('#jsSendMsg');

const appendMsg = (text, nickname) => {
  const li = document.createElement('li');
  li.innerHTML = `
        <span class="${nickname ? 'out' : 'self'}">${
    nickname ? nickname : 'You'
  }:</span> ${text}
    `.trim();
  messages.appendChild(li);
};

const handleSendMsg = event => {
  event.preventDefault();
  const input = sendMsg.querySelector('input');
  const { value: message } = input;
  getSocket().emit(window.events.sendMsg, { message });
  appendMsg(message);
  input.value = '';
};

export const handleNewMessage = ({ message, nickname }) =>
  appendMsg(message, nickname);

if (sendMsg) {
  sendMsg.addEventListener('submit', handleSendMsg);
}
