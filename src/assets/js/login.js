const LOGGED_OUT = 'loggedOut';
const LOGGED_IN = 'loggedIn';
const NICKNAME = 'nickname';
const body = document.querySelector('body');
const loginForm = document.querySelector('#jsLogin');
const nickname = localStorage.getItem(NICKNAME);
const socket = io('/');

const logIn = nickname => {
  socket.emit('setNickname', { nickname });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector('input');
  const { value: nickname } = input;
  localStorage.setItem(NICKNAME, nickname);
  input.value = '';
  body.className = LOGGED_IN;
  logIn(nickname);
};

if (loginForm) {
  loginForm.addEventListener('submit', handleFormSubmit);
}
