class ChatService {
    connection(socket) {
        socket.on('disconnect', () => {
            console.log(`User disconnect id is ${socket.id}`)
        })

        // event on here
        socket.on('client-send-data', msg => {
            console.log(`msg =  ${msg}`)
            _io.emit('chat message', msg)
        })

        socket.on('create-room', function(data) {
            console.log('Room: ' + data)
            // neu rom da co roi thi no se join vao room, neu chua co thi tao moi
            socket.join(data)
        })
    }
}

module.exports = new ChatService();