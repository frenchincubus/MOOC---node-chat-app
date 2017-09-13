const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to app chat'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user join'));

socket.on('createMessage', (message, callback) => {
  console.log('createMessage:', message);
  io.emit('newMessage', generateMessage(message.from, message.text));
  callback('This is from the server');
  // socket.broadcast.emit('newMessage', {
  //   from: message.from,
  //   text: message.text,
  //   createdAt: new Date().getTime()
  // });
});

socket.on('disconnect', function () {
  console.log('User was disconnected');
});
});



server.listen(port, () => {
  console.log(`connecté sur le port ${port}`);
});
