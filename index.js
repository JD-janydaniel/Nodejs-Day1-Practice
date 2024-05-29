//import section
import express from "express";
import fs from 'fs';
import { format } from "date-fns";
import path from 'path';
import { fileURLToPath } from 'url';

// Utility to get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.get('/create',(req,res)=>{
    let today = format(new Date(),'dd-mm-yyyy-HH-mm-ss')
    // console.log(today)
    const filename = `Timestamp/${today}.txt` 
    fs.writeFileSync(filename,`${today}`,'utf8')
    res.status(200).send('Timefiles are created successfully')
})

// app.get('/read',(req,res)=>{
//     let data = fs.readFileSync("/Timestamp",'utf8')
//     res.status(200).send(data)
// })

app.get('/read', (req, res) => {
    const directoryPath = path.join(__dirname, './Timestamp');
    let fileData = [];
  

    fs.readdirSync(directoryPath).forEach(file => {
      const filePath = path.join(directoryPath, file);
      const data = fs.readFileSync(filePath, 'utf8');
      fileData.push({ file, data });
    });
  res.status(200).json(fileData);
  });

//running port

app.listen(PORT,()=>{
    console.log(`Server is running`);
})