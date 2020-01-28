import io from 'socket.io'
import Game from './models/game'

const games = [];
io(5000).on('connection', (client : SocketIO.Client) => {
    console.log("Got a connection")
})