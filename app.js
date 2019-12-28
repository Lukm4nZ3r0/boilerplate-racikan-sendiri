require('dotenv').config()
const port = 8000
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
routes(app)

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@clusterpertama-ibnm3.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err) throw err
    app.listen(port,()=>{
        console.log('server listen on PORT:'+port)
    })
})

