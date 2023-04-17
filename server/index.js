const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./auth.routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)

const start = async () => {
    try{
        mongoose.connect(config.get("dbURL"))


        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        })

    } catch(e){

    }
}

start()