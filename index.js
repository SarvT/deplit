require('dotenv').config()
const express = require('express')
const app = express()



app.get('/', (req, res)=>{
    res.send("<h1>Hi Chai.</h1>")
})

app.get('/twt', (req, res)=>{
    res.status(400).send("Twitter")
})

app.get('/login', (req, res)=>{
    res.send("<h1>Login now.</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Working at ${process.env.PORT}`);
    // console.log("Code");
})