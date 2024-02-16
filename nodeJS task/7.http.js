const http = require('http');
const PORT = 4050;

let server = http.createServer(function(req,res){
    if(req.url === '/'){
        res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
    }
})

server.listen(PORT,function(){
    console.log(`The Server Is Running On Port ${PORT}`);
})