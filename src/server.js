const express=require('express')
const app=express()
const env=require('dotenv')
const bodyParser=require('body-parser')

//environment variable
env.config({path:'../.env'});
 
//middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.status(200).json({
        msg:'Ok....'
    })
})

app.post('/data',(req,res)=>{
    res.status(200).json({
        msg:req.body
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})