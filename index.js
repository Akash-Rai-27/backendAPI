const express = require('express')
const app = express();

const PORT = 80;

app.get("/sayHello",(req,res)=>{
    res.json({message : "Hellow user"})
});


app.listen(PORT, ()=>{
    console.log("server is running..")
})