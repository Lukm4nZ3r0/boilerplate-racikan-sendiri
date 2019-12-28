const jwtConfig = require('../middlewares/jwtConfig')
const User = require('../models/User')

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
    }
}