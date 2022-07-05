const express = require('express')
const app = express()

const mongoose = require('./configs/mongoose.config');
const indexRouter = require('./routes/index.route')
const chatRouter = require('./routes/chat.route')


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/', indexRouter)
app.use('/chat', chatRouter)

module.exports = app