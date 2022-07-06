const mongoose = require('mongoose');
const dotenv = require('dotenv');
// env
dotenv.config({ path: './config.env' });

// connect mongoose
console.log(process.env.MONGODB_LOCAL_URI)
const uri = process.env.MONGODB_LOCAL_URI.replace(
    '<USERNAME>',
    process.env.MONGODB_USERNAME
).replace(
    '<PASSWORD>',
    process.env.MONGODB_PASSWORD
);

mongoose.connect(uri,
    {
        serverSelectionTimeoutMS: 3000
    })
    .then(result => console.log('Database connect success'))
    .catch(err => console.error(`Database connect error ${err}`));
mongoose.connection.on('connected', () => {
    console.log('Mongodb connected to db success');


});
mongoose.connection.on('error', err => {
    console.error('Mongodb connected to db error' + err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected db success');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});

module.exports = mongoose;