var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var cors = require('cors')
var User = require('./models/users.js')
var app = express()
var denv = require('dotenv')
const PORT=3001
app.use(express.json())
app.use(cors())
denv.config()

mdb.connect(process.env.MONGO_URL).then(()=>{
    console.log(process.env.MONGO_URL)
    console.log("MongoDB Connection Successful");
}).catch(()=>{
    console.log("Check your connection string");
});

app.get('/',(req,res)=>{
    res.send("Wecome to Backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Wecome to Backend Server",url:"localhost",port:PORT})
})

app.get('/static',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/signup',(req,res)=>{
    console.log(req.body);
    var {firstName,lastName,email,password} = req.body
    console.log(firstName,lastName,email,password);
    try{
        var newUser = new User({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
        })
        newUser.save()
        console.log("successfull");
        res.status(200).send("User Added Successfully")
    }
    catch(err){
        console.log(err);
    }
})

app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
        console.log("All Data Fetched")
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

app.post('/login',async(req,res)=>{
    var {email,password}=req.body
    try{
        var existingUser = await User.findOne({email:email})
        console.log(existingUser);
        if(existingUser){
            if(existingUser.password !== password){
                res.json({message:"Invalid Credentials",isLoggedIn:false})
            }
            else{
                res.json({message:"Login Successful",isLoggedIn:true})
            }

        }
        else{
            res.json({message:"Login failed",isLoggedIn:false})
        }
    }
    catch(err){
        console.log("Login Failed")
    }
})

app.listen(PORT,()=>{
    console.log(`Backend Created Successfully\n URL:http://localhost:${PORT}`)
})
