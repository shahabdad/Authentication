// // const mongoose = require('mongoose');
// // // const bcrypt = require('bcryptjs');

// // const userSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, unique: true, required: true },
// //     password: { type: String, required: true },
// //     otp: {type:String},
// //     otpExpires:{type:Date}
// // }); 


// // // userSchema.pre('save', async function (next) {
// // //     if (!this.isModified('password')) return next();
// // //     this.password = await bcrypt.hash(this.password, 10);
// // //     next();
// // // });

// // module.exports = mongoose.model('User', userSchema); 

// import { request } from "express";
// import mongoose   from "mongoose";

// const  userSchema = new mongoose.Schema({
//     email :
//      {
//          type: String,
//          unique: true,
//           required: true
//          },
//     name : 
//     { 
//         type: String,
//          required:  true
//         },
//     password: {
//         type: String,
//         required: true,
//     }, 
//     isVerified: {
//         type:Boolean,
//         default:false,
//     },
//     verficationCode: String 

// }, {timestamps:true})

// const  Usermodel = mongoose.model("user", userSchema)

// export default Usermodel; 


import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
       
    },
    password:{
        type:String,
        required:true,
       
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verficationToken:String,
    verficationTokenExpiresAt:Date,
    
},{timestamps:true})

export const Usermodel = mongoose.model('User',userSchema)