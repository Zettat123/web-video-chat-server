const PeerServer = require("peer").PeerServer;
const server = PeerServer({ port: 2333, path: "/peerserver" });

console.log("Server is listening port 2333");

server.on("connection", id => console.log(`${id} is connected`));
server.on("disconnect", id => console.log(`${id} is disconnected`));
