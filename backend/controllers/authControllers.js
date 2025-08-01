// // const User = require('../model/User'); 
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // exports.register = async (req, res) => {
// //     try {
// //         const { name, email, password } = req.body;

// //         // Check if user already exists
// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) {
// //             return res.status(400).json({ message: "User already exists" });
// //         }

// //         // Hash password
// //         const salt = await bcrypt.genSalt(10);
// //         const hashedPassword = await bcrypt.hash(password, salt);

// //         // Create new user
// //         const user = await User.create({ name, email, password: hashedPassword });

// //         res.status(201).json({ message: "User registered", user });
// //     } catch (err) {
// //         res.status(400).json({ error: err.message });
// //     }
// // };

// // // Login
// // exports.login = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         const user = await User.findOne({ email }); // Capitalized
// //         if (!user) return res.status(400).json({ message: 'Invalid email' });

// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

// //         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //             expiresIn: '1h',
// //         });

// //         res.json({ message: 'Login successful', token });
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // };


// const User = require('../model/User');
// const bcrypt = require('bcryptjs');

// // Register Controller
// exports.register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Create user (password will be hashed in schema)
//         const user = await User.create({ name, email, password });

//         res.status(201).json({ message: "User registered successfully", user });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// // Login Controller
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: "Invalid email" });
//         }

//         // Compare password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid password" });
//         }

//         res.json({ message: "Login successful", user });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };


// //  Get All Users
// exports.getUsers = async (req,res)  => { 
//         try { 
//             const  users = await  User.find().select('-password'); // Exclude password from response
//             res.status(200).json({user});  

//         } catch (err) { 
//                    res.status(500).json({ error: err.message });
//         }
// }


const User = require('../model/User');
const bcrypt = require('bcryptjs');

// Register
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        res.json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
