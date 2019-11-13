const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const data = require('./db/data.json')
const statusChangesRandomly = require('./libs/utils')
// port from envirnoment var or default - 3001
const port = process.env.PORT || 4001;

// setting up express
const app = express();

// create the server
const server = http.createServer(app);

// adding socket IO middleware
const io = socketIo(server);

// constant for timer interval ; 6000 equal one minute
const time = 10000;

// handle home request
app.get('/' , function(req , res) {
    res.sendFile(__dirname + 'index.html');
})

// setting up a socket with the namespace "connection" for new sockets
io.on('connection' , socket => {
    console.log('Socket is connected ..');

    // listen on a new namespace called "incoming"
    // socket.on('incoming' , data => {
    //     // here we broadcast it out
    //     console.log(data , 'incoming data');
    // });

    // emit the initial data
    socket.emit('sendingData' , data);
    // emiting the data every one minute
    setInterval(() => {
        socket.emit('sendingData' , statusChangesRandomly(data));
    } , time)

    // namespace 'disconnect' when a client disconnects
    socket.on('disconnect', () => {
        console.log('Socket is disconnected ..');
    });
});

// run the server with the port
server.listen(port , () => console.log(`Listening on port ${port}`));
