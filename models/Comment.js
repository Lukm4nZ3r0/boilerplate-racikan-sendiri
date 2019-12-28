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
        ref:'user'
    },
    post:{
        type: Schema.Types.ObjectId,
        ref:'post'
    }
})

module.exports = mongoose.model('comment', commentSchema)