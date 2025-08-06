
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


import Usermodel from '../model/User'; 
import bcrypt from 'bcryptjs'; 

const  register = async (req, res)  => {
    try {
        const { name, email, password } = req.body; 
    if (!name ||   !email || !password) { 
        return res.status(400).json({success: false, message : 'All fields are  required'}); 
        
    }
    const  ExistingUser = await  Usermodel.findone({email})
    if (ExistingUser) { 
        return res.status(400).json({ success: false, message: 'User already Exists  Please Login '});
    }
     const hashedPassword  = await bcrypt.hash(password, 10)
     const user = await Usermodel.create({ 
        name,
        email,
        password: hashedPassword 
     })
     await user.save(); 
     return res.status(200).json({ success: true, message: 'User Registered Successfully',user });
    } catch ( err){ 
        console.error(err); 
        return res.status(500).json({ success: false, message: ' internal Server error' });
     
    }
}

export { register}; 
