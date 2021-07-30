const  express = require("express");
const app = express ();

const port = 3000;
app.get("/", (req,res) => {
    return res.send("hello world")
})

app.get("/login",(req,res) =>{
    return res.send("This is login page")
})
app.listen(port,() =>{
    console.log("app listing on port number 3000");
})