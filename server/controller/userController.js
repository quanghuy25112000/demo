const express=require('express')
const router=express.Router()
const User=require('../models/user')
router.post('/newUser',async (req,res)=>{
    let body=req.body
    const userExist=await User.findOne({
        account:req.body.account
    })
    if(userExist){
        return res.status(400).send({err:"email already exist"})
    }
    let user=new User(body)
    user.save((err)=>{
        if(err) throw err
        console.log('successly');
    })
    res.json({'data':user})
})
module.export=router
