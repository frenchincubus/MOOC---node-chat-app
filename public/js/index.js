var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});
//
socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
//
// socket.on('newEmail', function (email) {
//   console.log('new email', email);
// });

socket.on('newMessage', function (message){
  console.log('new message', message);
});

socket.on('welcomeMessage', function (message) {
  console.log(message);
});

socket.on('userJoin', function (message) {
  console.log(message);
});
