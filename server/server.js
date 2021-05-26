require('dotenv');
const PORT = process.env.PORT || 3002;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
})

app.use(cors());

const rooms = {
    "room4": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room5": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room6": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room7": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room8": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room9": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room10": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room11": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room12": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room13": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room14": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room15": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
    "room16": { usersIds: ["socket.id", "socket.id"], image: "", users: 2, maxUsers: 3, roomId: "room4" },
}


app.get("/", (req, res) => {
    res.json({
        status: 200,
        data: Object.values(rooms)
    });
});

io.on("connection", socket => {
    console.log(socket.id, "connected");
    socket.on("joinedRoom", roomId => {
        rooms[`${roomId}`].usersIds.push(socket.id);
        socket.emit("roomData", rooms[roomId]);
    })
});


server.listen(PORT, () => console.log(`Server running on port:${PORT}`));


