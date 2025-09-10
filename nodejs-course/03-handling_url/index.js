// import http from "http";
// import url from "url";

import express from "express";

const app = express();

const Cusername = "vajeed"
const Cpassword = "password"



app.get("/home",(req,res)=>{
    console.log("request hit")
    const qSearch = req.query.search;
    const qName = req.query.name;
    
    if(qSearch && qName){
            res.send(`${qName} searched for ${qSearch}`)
    }
        else{

            res.end(`Welcome to home,MR hacker `);
        }
})

app.get("/user",(req,res)=>{
    const username = req.query.username;
    const password = req.query.password;

    if(username && password){
        if(username==Cusername && password==Cpassword){
                res.send("User logged in successfully")
            }else{
                res.send("wrong username or password")
            }
    }else{
        res.send("username or password missing");
    }
})


app.get("/userinfo",(req,res)=>{
    res.send("User inforamtion not availabel at");
})



// const server = http.createServer((req,res)=>{
//     const userUrl = url.parse(req.url,true);
//     const splitUrl = userUrl.pathname.split('/');
//     const queryPar = userUrl.query;
//     console.log(queryPar);
    
//     if(splitUrl[1]=="home" ){
//         if(queryPar.search && queryPar.name){
//             res.end(`${queryPar.name} searched for ${queryPar.search}`)
//         }
//         else if(splitUrl[2]){
//         res.end(`Welcome to home,MR hacker ${splitUrl[2]}`);
//         }else{

//             res.end(`Welcome to home,MR hacker `);
//         }
        
//     }else if(splitUrl[1]=="user"){
//         if(queryPar.username && queryPar.password){
//             if(queryPar.username==username && queryPar.password==password){
//                 res.end("User logged in successfully")
//             }else{
//                 res.end("wrong username or password")
//             }
//         }else{
//             res.end("username or password is missing")
//         }
//     }
    
    
//     else{
//         res.end("Welcome to home hacker");
//     }
    
// })



app.listen(8282,()=>{
    console.log("Server started on port 8282");
})