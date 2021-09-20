const io = require("socket.io-client");
const socket = io("ws://192.168.1.16:3000/", {
    reconnectionDelayMax: 10000
});


socket.on("status",(arg)=>{
    console.log("Status : "+arg)
})
socket.on("data",(arg)=>{
    console.log("Data : " +arg)
})

socket.on("connected",()=>{
    socket.emit("setSetAddon","20")
})

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});

