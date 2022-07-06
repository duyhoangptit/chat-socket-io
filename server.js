const app = require('./app')
const server = require('http').Server(app)
const io = require('socket.io')(server)
const dotenv = require('dotenv');


const ChatService = require('./services/chat.service')

// env
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})

app.io = io

global._basedir = __dirname
global._io = io

global._io.on('connection', ChatService.connection)
