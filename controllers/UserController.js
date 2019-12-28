const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
    getAllUsers:(req,res)=>{
        User.find().select('-password').populate('posts').exec((err,users)=>{
            if(err) throw error
            return res.status(200).send({
                message:"OK",
                result:users
            })
        })
    },
    getUserByID:(req,res)=>{
        User.findOne({_id:req.params.id}).select('-password').populate('posts').exec((err,user)=>{
            if(err) throw err
            return res.status(200).send({
                message:"OK",
                result:user
            })
        })
    },
    updateUserByID:(req,res)=>{
        bcrypt.hash(req.body.password, 12,(err,hash)=>{
            if(err) throw err
            User.findOneAndUpdate({_id:req.params.id},{
                $set: {
                    email:req.body.email,
                    password:hash,
                    name:req.body.name
                }
            },(err,user)=>{
                if(err) throw err
                return res.status(200).send({
                    message:"OK",
                    result:user
                })
            })
        })
    }
}