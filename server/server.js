const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
  console.log('New user connected');

//   socket.emit('newEmail', {
//     from: 'lionel@example.com',
//     text: 'hello dudes !!',
//     createAt: 123
//   });
//
//   socket.on('createEmail', (newEmail) => {
//     console.log('createEmail', newEmail);
//   });
//
//   socket.on('disconnect', function () {
//     console.log('User was disconnected');
//   });

socket.on('newMessage', (message) => {
  console.log('new message:', message);
  socket.emit('message', {
     name: 'lio',
     text: 'response back',
    createdAt: 123
  });
})
});



server.listen(port, () => {
  console.log(`connecté sur le port ${port}`);
});
