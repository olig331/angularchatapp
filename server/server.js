require('dotenv');
const PORT = process.env.PORT || 3002;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors:{
        origin:"http://localhost:4200",
        methods:["GET", "POST"]
    }
})

io.on("connection", socket => {
    console.log(socket.id, "connected");
});


server.listen(PORT, () => console.log(`Server running on port:${PORT}`));


