const mongoose = require('mongoose')
const bcrypt =  require('bcryptjs')


const userSchema  = new mongoose.Schema({ 
    name:String,
    email: {type: String, unique: true}, 
    password: String,
});

//  Hash the password before saving 

userSchema.pre('save' , async function (next) { 
    
})