const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send('{"response": "Hello, Welcome to the test devops CICD"}')
})

app.get("/hello", (req,res)=>{
    res.send('{"response": "Hello,CICD"}')
})
app.get("/test", (req,res)=>{
    res.send('{"response": "test,CICD"}')
})

app.listen(process.env.PORT || 3000, ()=>console.log("Server up and runnign on port 3000"))
