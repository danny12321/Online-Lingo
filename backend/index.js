const io = require('socket.io')();
io.on('connection', client => {
    console.log("Got a connection")
});
io.listen(5000);