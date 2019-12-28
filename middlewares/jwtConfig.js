require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    sign:(payload)=>{
        let token = jwt.sign(payload, process.env.JWT_KEY)
        return token
    },
    verify:(req,res,next)=>{
        let token = req.headers.authorization
        if(token){
            if(token.includes('Bearer ')){
                token = token.slice(7, token.length)
            }
            jwt.verify(token, process.env.JWT_KEY,(err,decoded)=>{
                if(err){
                    return res.status(200).send({
                        message:"INVALID_TOKEN",
                        status:false
                    })
                }
                else{
                    next()
                    return decoded
                }
            })
        }
        else{
            return res.status(200).send({
                message:"JWT_NOT_FOUND",
                status:false
            })
        }
    }
}