(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = void 0;

var handleMessageNotif = function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
};

exports.handleMessageNotif = handleMessageNotif;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLElBQUksRUFBSTtBQUFBLE1BQ2hDQyxPQURnQyxHQUNWRCxJQURVLENBQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxRQUR1QixHQUNWRixJQURVLENBQ3ZCRSxRQUR1QjtBQUV4Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZUFBNEJELE9BQTVCO0FBQ0QsQ0FITSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoYW5kbGVNZXNzYWdlTm90aWYgPSBkYXRhID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YCk7XG59O1xuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io('/');

var sendMessage = function sendMessage(message) {
  socket.emit('newMessage', {
    message: message
  });
  console.log("You: ".concat(message));
};

var setNickname = function setNickname(nickname) {
  socket.emit('setNickname', {
    nickname: nickname
  });
};

socket.on('messageNotif', _chat.handleMessageNotif);
console.log('start');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYjdlZjJjMmMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLE9BQU8sRUFBSTtBQUM3QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFRCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkgsT0FBcEI7QUFDRCxDQUhEOztBQUtBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFFBQVEsRUFBSTtBQUM5QlIsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFSSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRCxDQUZEOztBQUlBUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxjQUFWLEVBQTBCQyx3QkFBMUI7QUFFQUwsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gJy4vY2hhdCc7XG5jb25zdCBzb2NrZXQgPSBpbygnLycpO1xuXG5jb25zdCBzZW5kTWVzc2FnZSA9IG1lc3NhZ2UgPT4ge1xuICBzb2NrZXQuZW1pdCgnbmV3TWVzc2FnZScsIHsgbWVzc2FnZSB9KTtcbiAgY29uc29sZS5sb2coYFlvdTogJHttZXNzYWdlfWApO1xufTtcblxuY29uc3Qgc2V0Tmlja25hbWUgPSBuaWNrbmFtZSA9PiB7XG4gIHNvY2tldC5lbWl0KCdzZXROaWNrbmFtZScsIHsgbmlja25hbWUgfSk7XG59O1xuXG5zb2NrZXQub24oJ21lc3NhZ2VOb3RpZicsIGhhbmRsZU1lc3NhZ2VOb3RpZik7XG5cbmNvbnNvbGUubG9nKCdzdGFydCcpO1xuIl19
},{"./chat":1}]},{},[2])