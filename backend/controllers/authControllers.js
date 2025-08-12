
// // const User = require('../model/User');
// // // const bcrypt = require('bcryptjs');
// // const sendEmail = require('../utils/sendEmail');
// // const generateOTP = require('../utils/generateOTP');


// // //  helper :generate 6-digit OTP
// // // const  generateOTP =  () =>  Math.floor (100000 + Math.random() * 900000).toString();


// // // Register
// // exports.register = async (req, res) => {
// //     try {
// //         const { name, email, password } = req.body;

// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) return res.status(400).json({ message: "User already exists" });

// //         const otp =generateOTP();
// //         const otpExpires = new Date(Date.now() + 10 * 60 *   1000);

// //         const  user = await  User.create({
// //             name,
// //             email,
// //             password, 
// //             otp,
// //             otpExpires 
// //         }); 

// //         // Simulate sending OTP via email /SMS
// //         console.log(`🔐 OTP for  ${email}:${otp}`);
// //           await sendEmail(email, 'Your OTP Code', `Your OTP is: ${otp}`);
// //         res.status(201).json({ message: "User registered successfully", user });
// //     } catch (err) {
// //         res.status(400).json({ error: err.message });
// //     }
// // };

// // // Login
// // exports.login = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         const user = await User.findOne({ email });
// //         if (!user) return res.status(400).json({ message: "Invalid email" });

// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if (!isMatch) return res.status(400).json({ message: "Invalid password" });

// //         res.json({ message: "Login successful", user });
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // };

// // // Get All Users
// // exports.getUsers = async (req, res) => {
// //     try {
// //         const users = await User.find();
// //         res.status(200).json({ users });
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // };


// // //  Verify OTP
// // exports.verifyOTP = async (req, res) =>  { 

// //     try {
// //                const { email, otp }  = req.body;
// //                const user = await User.findOne({email})
// //                if(!user) return res.status(400).json({ message:"User not found"}); 

// //                if (user.otp !== otp)  return res.status(400).json({message:"Invalid OTP "});

// //                if (user.otpExpires < new  Date())  { 
// //                 return  res.status (400).json({ message:"OTP has expired" }); 

// //                }

// //                 // Clean OTP After verification 
// //                 user.otp  = undefined; 
// //                 user.otpExpires = undefined ; 
// //                 await user.save(); 

// //                 res.json({message: "OTP verified successfully "});
// //         } catch (err) { 

// //                es.status(500).json({ error: err.message}); 
// //         }
// // }



// const User = require('../model/User');
// const bcrypt = require('bcryptjs');
// const sendEmail = require('../utils/sendEmail');
// const generateOTP = require('../utils/generateOTP');

// // Register
// exports.register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const otp = generateOTP(); // generate a 6-digit code
//         const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiry 

//         const user = await User.create({
//             name,
//             email,
//             password: hashedPassword,
//             otp,
//             otpExpires
//         });

//         // Simulate sending OTP via email
//         console.log(`🔐 OTP for ${email}: ${otp}`);
//         await sendEmail(email, 'Your OTP Code', `Your OTP is: ${otp}`);

//         res.status(201).json({ message: "User registered successfully", user });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// // Login
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "Invalid email" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid password" });

//         res.json({ message: "Login successful", user });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // Get All Users
// exports.getUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json({ users });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // Verify OTP
// exports.verifyOTP = async (req, res) => {
//     try {
//         const { email, otp } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

//         if (user.otpExpires < new Date()) {
//             return res.status(400).json({ message: "OTP has expired" });
//         }

//         // Clear OTP after successful verification
//         user.otp = undefined;
//         user.otpExpires = undefined;
//         await user.save();

//         res.json({ message: "OTP verified successfully" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };


// import { SendVerificationCode, WelcomeEmail } from '../middlewares/emails.js';
// import Usermodel from '../model/user.js';
// import bcrypt from 'bcryptjs';

// const register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         if (!name || !email || !password) {
//             return res.status(400).json({ success: false, message: 'All fields are  required' });

//         }
//         const ExistingUser = await Usermodel.findone({ email })
//         if (ExistingUser) {
//             return res.status(400).json({ success: false, message: 'User already Exists  Please Login ' });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const verficationCode = Math.floor(100000 + Math.random() * 900000).toString();
//         const user = await Usermodel.create({
//             name,
//             email,
//             password: hashedPassword,
//             verficationCode
//         })
//         await user.save();
//         SendVerificationCode(user.email.verficationCode)
//         return res.status(200).json({ success: true, message: 'User Registered Successfully', user });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ success: false, message: ' internal Server error' });

//     }
// }


// const VerfiyEmail = async (req, res) => {
//     try {
//         const { code } = req.body
//         const user = await Usermodel.findOne({
//             verficationCode: code
//         })
//         if (!user) {
//             return res.status(400).json({ success: false, message: "Invalid  or Expired Code" })
//         }
//         user.isVerified = ture,
//             user.verficationCode = undefined;
//         await user.save()
//         await WelcomeEmail(user.email, user.name)
//         return res.status(200).json({ success: true, message: "Email verifed SuccessFully" })
//     } catch (error) {
//         console.error(err);
//         return res.status(500).json({ success: false, message: ' internal Server error' });
//     }
// }

// export { register, VerfiyEmail }; 


import { sendVerificationEamil, WelcomeEmail } from "../middlewares/Email.js"
import { generateTokenAndSetCookies } from "../middlewares/GenerateToken.js"
// import { Usermodel } from "../models/User"
import { Usermodel } from "../model/User.js";

import bcryptjs from 'bcryptjs'

const register = async (req, res) => {
    try {
        // console.log(req.body);
         console.log("Incoming request body:", req.body);
        // const { email, password, name } = req.body;

        const { name, email, password} = req.body;

        if ( !name|| !email || !password ) {
            return res.status(400).json({ success: false, message: "All fields are required" });
            console.log(req.body);
        }

        const existingUser = await Usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists, please login" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new Usermodel({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        });
        
        await user.save();

        generateTokenAndSetCookies(res, user._id);
        await sendVerificationEamil(user.email, verificationToken);

        return res.status(200).json({ success: true, message: "User registered successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};



const VerfiyEmail = async (req, res) => {
    try {
        const { code } = req.body;
        console.log()
        const user = await Usermodel.findOne({
            verficationToken: code,
            verficationTokenExpiresAt: { $gt: Date.now() }
        })
        if (!user) {
            return res.status(400).json({ success: false, message: "Inavlid or Expired Code" })

        }

        user.isVerified = true;
        user.verficationToken = undefined;
        user.verficationTokenExpiresAt = undefined;
        await user.save()
        await WelcomeEmail(user.email, user.name)
        return res.status(200).json({ success: true, message: "Email Verifed Successfully" })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: "internal server error" })
    }
}

export { register, VerfiyEmail }