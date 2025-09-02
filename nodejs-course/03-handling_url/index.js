import http from "http"
import url from "url"


const username = "vajeed"
const password = "password"

const server = http.createServer((req,res)=>{
    const userUrl = url.parse(req.url,true);
    const splitUrl = userUrl.pathname.split('/');
    const queryPar = userUrl.query;
    console.log(queryPar);
    
    if(splitUrl[1]=="home" ){
        if(queryPar.search && queryPar.name){
            res.end(`${queryPar.name} searched for ${queryPar.search}`)
        }
        else if(splitUrl[2]){
        res.end(`Welcome to home,MR hacker ${splitUrl[2]}`);
        }else{

            res.end(`Welcome to home,MR hacker `);
        }
        
    }else if(splitUrl[1]=="user"){
        if(queryPar.username && queryPar.password){
            if(queryPar.username==username && queryPar.password==password){
                res.end("User logged in successfully")
            }else{
                res.end("wrong username or password")
            }
        }else{
            res.end("username or password is missing")
        }
    }
    
    
    else{
        res.end("Welcome to home hacker");
    }
    
})



server.listen(8282,()=>{
    console.log("Server started on port 8282");
})