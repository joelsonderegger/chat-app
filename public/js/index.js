var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'Alexa',
        text: 'Hey. It\'s me Alexa'
    });
});

socket.on('disconnect', function ()  {
    console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});