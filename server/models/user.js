var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    account:String,
    name: String,
    avatar:String,
    password:String,
    created:{
        type:Date,
        default:Date.now
    }
})

var User = mongoose.model('User', userSchema)
module.exports = User