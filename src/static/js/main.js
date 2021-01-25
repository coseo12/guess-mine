(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYmY2NjFkN2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9sb2dpbic7XG4iXX0=
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var LOGGED_OUT = 'loggedOut';
var LOGGED_IN = 'loggedIn';
var NICKNAME = 'nickname';
var body = document.querySelector('body');
var loginForm = document.querySelector('#jsLogin');
var nickname = localStorage.getItem(NICKNAME);
var socket = io('/');

var logIn = function logIn(nickname) {
  socket.emit('setNickname', {
    nickname: nickname
  });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector('input');
  var nickname = input.value;
  localStorage.setItem(NICKNAME, nickname);
  input.value = '';
  body.className = LOGGED_IN;
  logIn(nickname);
};

if (loginForm) {
  loginForm.addEventListener('submit', handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzb2NrZXQiLCJpbyIsImxvZ0luIiwiZW1pdCIsImNsYXNzTmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWxCO0FBQ0EsSUFBTUUsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJQLFFBQXJCLENBQWpCO0FBQ0EsSUFBTVEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBTCxRQUFRLEVBQUk7QUFDeEJHLEVBQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRU4sSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJKLEVBQUFBLElBQUksQ0FBQ1csU0FBTCxHQUFpQmQsVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTEcsRUFBQUEsSUFBSSxDQUFDVyxTQUFMLEdBQWlCYixTQUFqQjtBQUNBVyxFQUFBQSxLQUFLLENBQUNMLFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzVCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUdaLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRjRCLE1BR2JFLFFBSGEsR0FHQVcsS0FIQSxDQUdwQkMsS0FIb0I7QUFJNUJYLEVBQUFBLFlBQVksQ0FBQ1ksT0FBYixDQUFxQmxCLFFBQXJCLEVBQStCSyxRQUEvQjtBQUNBVyxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FoQixFQUFBQSxJQUFJLENBQUNXLFNBQUwsR0FBaUJiLFNBQWpCO0FBQ0FXLEVBQUFBLEtBQUssQ0FBQ0wsUUFBRCxDQUFMO0FBQ0QsQ0FSRDs7QUFVQSxJQUFJRCxTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDZSxnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMT0dHRURfT1VUID0gJ2xvZ2dlZE91dCc7XG5jb25zdCBMT0dHRURfSU4gPSAnbG9nZ2VkSW4nO1xuY29uc3QgTklDS05BTUUgPSAnbmlja25hbWUnO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc0xvZ2luJyk7XG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcbmNvbnN0IHNvY2tldCA9IGlvKCcvJyk7XG5cbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xuICBzb2NrZXQuZW1pdCgnc2V0Tmlja25hbWUnLCB7IG5pY2tuYW1lIH0pO1xufTtcblxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcbn0gZWxzZSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICBsb2dJbihuaWNrbmFtZSk7XG59XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICBjb25zdCB7IHZhbHVlOiBuaWNrbmFtZSB9ID0gaW5wdXQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCBuaWNrbmFtZSk7XG4gIGlucHV0LnZhbHVlID0gJyc7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICBsb2dJbihuaWNrbmFtZSk7XG59O1xuXG5pZiAobG9naW5Gb3JtKSB7XG4gIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cbiJdfQ==
},{}]},{},[1])