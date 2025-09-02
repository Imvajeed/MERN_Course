import http from "http";
import fs from "fs";
import url from "url";

const httpServer = http.createServer((req,res)=>{

    const prasedUrl = url.parse(req.url,true);
    console.log(req);
    fs.appendFile('users.log',`${req.connection.remoteAddress} opened ${req.url} \n`,(err)=>{
        if(err){
            console.log("error while logging");
        }else{
            console.log("logged!!!!!!");
        }

    });
    if(prasedUrl.pathname == '/home'){
        res.end("Welcome to home hacker");
    }else{
        res.end("hello, hacker")
    }
    
});



httpServer.listen(8282,()=>{
    console.log("Server started");
})