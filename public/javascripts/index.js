const socket = io('http://localhost:3000')

$(document).ready(function(){
  $('#btnCreateRoom').click(() => {
    socket.emit('create-room', $('#room').val())
  })
});