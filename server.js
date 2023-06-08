const express = require("express")
const mongoose = require("mongoose")
const port = 7880
const app = express()
app.use(express.json())


const router = require("./Router/pigrouter")
app.use(router)



mongoose.connect("mongodb+srv://ujunwastephen8:tZ0Yg3tKwixGNmgw@cluster0.vkkubqp.mongodb.net/").then(()=>{
    console.log("connection is correct")
})

app.listen(port, ()=>{
    console.log(`server is listening to port ${port}`)
})