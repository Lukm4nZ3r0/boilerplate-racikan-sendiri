const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwtConfig = require('../middlewares/jwtConfig')

module.exports = {
    login: (req,res)=>{
        User.findOne({
            email:req.body.email,
        },(err,response)=>{
            if(err) throw err
            bcrypt.compare(req.body.password, response.password, (err,hash)=>{
                if(err) throw err
                if(hash){
                    return res.status(200).send({
                        message:"OK",
                        access_token:jwtConfig.sign({email:req.body.email, password:response.password})
                    })
                }
                else{
                    return res.status(200).send({
                        message:"DATA_NOT_FOUND"
                    })
                }
            });
        })
    },
    register: (req,res)=>{
        User.findOne({
            email:req.body.email
        },(err,response)=>{
            if(err) throw err
            if(response){
                return res.status(200).send({
                    message:"DUPLICATE_DATA"
                })
            }
            else{
                bcrypt.hash(req.body.password, 12,(err,hashPassword)=>{
                    if(err) throw err
                    const user = new User({
                        email: req.body.email,
                        password: hashPassword,
                        name: req.body.name,
                    })
                    user.save((err,response)=>{
                        if(err) throw err
                        return res.status(200).send({
                            message:"OK"
                        })
                    })
                })
            }
        })
    }
}