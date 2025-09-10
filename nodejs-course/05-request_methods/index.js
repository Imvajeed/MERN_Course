import express from "express"

const app = express();

app.use(express.json())

let userInfo = [];
let currentUserId = 0;

app.route("/attendance")
.post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;

    if (username && email) {
        const user = {
            userId: ++currentUserId,
            username,
            email
        }
        userInfo.push(user);
        return res.status(200).json({ message: "attendance marked!!!!" });
    } else {
        return res.status(401).json({ message: "username and email are required" });

    }

})
.get((req, res) => {
    return res.status(200).json(userInfo);
})
.put((req, res) => {
    const newUsername = req.body.username;
    const userId = req.body.userId;
    if (userId && newUsername) {
        userInfo = userInfo.map((item) => {
            if (item.userId === userId) {
                return { ...item, username: newUsername };
            } else {
                return item;
            }
        })

        return res.status(200).json({ message: "Username updated !!!!" });
    } else {
        return res.status(401).json({ message: "userId and username are required!!!!!" });
    }
})
.delete((req, res) => {
    const userId = req.body.userId;
    if (userId) {
        userInfo = userInfo.filter((item) => item.userId !== userId)

        return res.status(200).json({ message: "user got deleted!!!!!!!1" });
    } else {
        return res.status(401).json({ message: "UserId required!!!!!!!" });
    }

})


// //to add data to the server
// app.post("/attendance", (req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;

//     if (username && email) {
//         const user = {
//             userId: ++currentUserId,
//             username,
//             email
//         }
//         userInfo.push(user);
//         return res.status(200).json({ message: "attendance marked!!!!" });
//     } else {
//         return res.status(401).json({ message: "username and email are required" });

//     }
// })


// //to get the data from the server
// app.get("/attendance",(req,res)=>{
//     return res.status(200).json(userInfo);
// })


// //to change the username
// app.put("/attendance",(req,res)=>{
//     const newUsername = req.body.username;
//     const userId = req.body.userId;
//     if(userId&&newUsername){
//         userInfo = userInfo.map((item)=>{
//             if(item.userId===userId){
//                 return {...item,username:newUsername};
//             }else{
//                 return item;
//             }
//         })

//         return res.status(200).json({message:"Username updated !!!!"});
//     }else{
//         return res.status(401).json({message:"userId and username are required!!!!!"});
//     }
// })


// //to delete the user for database
// app.delete("/attendance",(req,res)=>{
//     const userId = req.body.userId;
//     if(userId){
//         userInfo = userInfo.filter((item)=> item.userId!==userId)

//         return res.status(200).json({message:"user got deleted!!!!!!!1"});
//     }else{
//         return res.status(401).json({message:"UserId required!!!!!!!"});
//     }

// })


app.listen(8282, () => {
    console.log("Server is running on port : 8282");
})