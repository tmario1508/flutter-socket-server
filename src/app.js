const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();


const server = require('http').createServer(app);

module.exports.io = require('socket.io')(server);
require('./sockets/sockets');

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.NODE_PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server is running on port ${process.env.NODE_PORT}`);
});