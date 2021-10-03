const express = require("express")
const getRoutes = require("./Routes/get.routes")
const app = express()
const port = 1011

async function load(){
    try{
       

app.use(express.json())

app.use("/",getRoutes)

app.listen(port, () => console.log("server is running"))
    } catch(err){
            console.log("error in starting the server",err)
    }
}

load()