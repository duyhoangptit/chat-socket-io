const redis = require('redis');
const dotenv = require('dotenv');
// env
dotenv.config({ path: './config.env' });

const HOST = process.env.REDIS_HOST;
const PORT = process.env.REDIS_PORT;

console.log(HOST)
console.log(PORT)

const client = redis.createClient({
    port: PORT,
    host: HOST
});

client.on('connect', () => {
    console.log(`Redis connected host ${HOST} port ${PORT}!`)
});

module.exports = client;