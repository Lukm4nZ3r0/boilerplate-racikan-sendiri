const mongoose = require('mongoose')

const {Schema} = mongoose

const commentSchema = new Schema({
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
    post:{
        type: Schema.Types.ObjectId,
        ref:'post',
        required:true
    }
})

module.exports = mongoose.model('comment', commentSchema)