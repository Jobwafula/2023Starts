const http = require('http');

const host ='localhost';
const port = 8000;
const requestListener = function(req,res){
    re.writeHead(200);
    res.end("server processing");
}
const server = http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`);
});