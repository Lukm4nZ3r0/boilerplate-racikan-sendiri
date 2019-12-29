const Post = require('../models/Post')

module.exports = {
    getAllPost: (req,res) =>{
        Post.find((result)=>{
            res.status(200).send({
                message:"OK!",
                result:result
            })
        })
    },
    createNewPost: (req,res) =>{
        const post = new Post({
            ...req.body,
            date: new Date().toISOString()
        })
        post.validate((validate)=>{
            if(validate !== null){
                return res.status(200).send({
                    message:"ERROR",
                    result:validate.message
                })
            }
            else{
                post.save((err,saveResponse)=>{
                    if(err) throw err
                    return res.status(200).send({
                        message:"OK",
                        result:saveResponse
                    })
                })
            }
        })
    },
    getPostByUserID:(req,res)=>{
        Post.find({user:req.params.id}).populate('comment').exec((err,posts)=>{
            if(err) throw err
            return res.status(200).send({
                message:"OK",
                result:posts
            })
        })
    }
}