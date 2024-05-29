//import section
import express from "express";


//declaration/initialization
const app = express();
const PORT = 4000;


//midleWare
app.use(express.json())

//Routes
app.get('/',(req,res)=>{
  //res.status(200).json({message:"Hi all welcome to our first node app"})
//   res.status(200).send("Hi all welcome to our first node app")//Good practice
res.status(200).send(`<div style="background-color:Aqua;color:black"><h1>Hi all welcome to our first node app</h1></div`)//not appreciated
})



//running port

app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`);
})