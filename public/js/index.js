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
  var li = $('<li></li>');
  li.text(`${message.from} : ${message.text}`);

  $('#messages').append(li);
});

$('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function () {

  })
});
