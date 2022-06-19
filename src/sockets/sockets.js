const {io} = require('../app');

io.on('connection', client => {
    console.log('Client connected');
    client.on('disconnect', () => { 
        console.log('Client disconnected');
    });

    client.on('team', data => {
        console.log(data);
        io.emit('team', data);
    });
});