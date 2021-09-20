const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const room = io.to("cocorico");

const Manager = require("./cocorico/manager")
let state={etat:"init",callback:()=>{room.emit("status",state.etat)}}
Manager.setObservable(state);

io.on('connection', (socket) => {

    socket.on("data", (callback) => {
        callback({
            sunset:Manager.getSunset(),
            sunrise:Manager.getSunrise(),
            rise_addon:Manager.getSunriseAddon(),
            set_addon:Manager.getSunsetAddon()
        });
    });

    socket.on("setRiseAddon", (arg) => {
        Manager.setSunrise(arg,()=>{
            room.emit("data",{
                sunset:Manager.getSunset(),
                sunrise:Manager.getSunrise(),
                rise_addon:Manager.getSunriseAddon(),
                set_addon:Manager.getSunsetAddon()
            })
        });
    });

    socket.on("setSetAddon", (arg) => {
        Manager.setSunset(arg,()=>{
            room.emit("data",{
                sunset:Manager.getSunset(),
                sunrise:Manager.getSunrise(),
                rise_addon:Manager.getSunriseAddon(),
                set_addon:Manager.getSunsetAddon()
            })
        });

    });

    //socket.on("status", (callback) => callback({etat:state.etat}));

    socket.on("ouvrir", () => Manager.ouvrir());

    socket.on("fermer", () => Manager.fermer());


    socket.join("cocorico");
    socket.emit("connected", true);
    console.log('Socket connected');
    socket.emit("status",state.etat)
});


app.get('/', (req, res) => {
    res.send("Hello World")
});


server.listen(3000, () => {
    console.log('listening on *:3000');
});
