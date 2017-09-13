var socket = io();

// socket.on('connect', () => {
//   console.log('Connected to server');
//
//   socket.emit('createEmail', {
//     to: 'kathy@example.com',
//     text: 'welcome back',
//     createAt: 456
//   });
// });
//
// socket.on('disconnect', () => {
//   console.log('Disconnected from server');
// });
//
// socket.on('newEmail', function (email) {
//   console.log('new email', email);
// });

socket.on('message', function (mess){
  console.log('new message', mess);
});

socket.emit('newMessage', {
  to: 'me',
  text: 'hello',
  createdAt: 123
});
