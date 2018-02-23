const fs = require("fs");
const PeerServer = require("peer").PeerServer;
const sslconfig = require("./sslconfig.js");

const server = PeerServer({
  port: 2333,
  path: "/peerserver",
  ssl: {
    key: fs.readFileSync(sslconfig.key),
    cert: fs.readFileSync(sslconfig.certificate)
  }
});

console.log("Server is listening port 2333");

server.on("connection", id => console.log(`${id} is connected`));
server.on("disconnect", id => console.log(`${id} is disconnected`));
