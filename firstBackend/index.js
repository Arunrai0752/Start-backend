import express from "express";
const app = express();

    app.get("/" , (req , res)=>{

        console.log("Server  Conected");
        res.json({ message: "Hello From backend"});
    })


    
    app.listen(1200, ()=> 
        {
            console.log("Server Started");
            console.log("http://localhost:1200");
            
            
        })