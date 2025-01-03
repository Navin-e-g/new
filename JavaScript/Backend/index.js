var express=require('express')
var app = express()
const PORT=3001
app.get('/',(req,res)=>{
    res.send("Wecome to Backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Wecome to Backend Server",url:"localhost",port:PORT})
})

app.listen(PORT,()=>{
    console.log(`Backend Created Successfully\n URL:http://localhost:${PORT}`)
})
