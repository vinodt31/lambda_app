const http = require("http");
const app = require("./app")

var httpServer = http.createServer(app)

httpServer.listen(5000,()=>{
    console.log("get request on port 5000")
})
