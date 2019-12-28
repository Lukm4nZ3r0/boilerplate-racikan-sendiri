require('dotenv').config()
const port = 8000
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const routes = require('./routes')

const whiteList = ['http://localhost:3000',undefined]
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) > -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue:false
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes(app)

// mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@clusterpertama-ibnm3.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,{
mongoose.connect(process.env.MONGO_LOCAL_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
},(err)=>{
    if(err) throw err
    app.listen(port,()=>{
        console.log('server listen on PORT:'+port)
    })
})

