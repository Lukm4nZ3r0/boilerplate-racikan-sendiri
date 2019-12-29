const mongoose = require('mongoose')

const {Schema} = mongoose

const postSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref:'comment',
        }
    ]
})

module.exports = mongoose.model('post', postSchema)