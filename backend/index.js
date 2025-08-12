// // // // const express =  require('express');
// // // // const mongoose =  require('mongoose');
// // // // const  dotenv = require('dotenv');
// // // // const authRoutes  = require('./routes/authRoutes');
// // // // const cors = require('cors'); 
// // // // const connectDB = require('./config/db');
// // // // dotenv.config();
// // // // const app = express();

// // // // //  frontend  from  live server 
// // // // app.use(cors({ 
// // // //     origin:'http://127.0.0.1:5500', 
// // // //     methods : ['GET','POST'],
// // // //     credentials: true,
// // // // }));
// // // // app.use(express.json());  
// // // // app.use('/api/auth', authRoutes); 


// // // //     connectDB().then(() => {
// // // //     app.listen(5000, () => {
// // // //         console.log('🚀 Server is running on http://localhost:5000');
// // // //     });
// // // // }).catch((err) => {
// // // //     console.error('❌ Server failed to start:', err.message);
// // // // });


// // // // import express from 'express'
// // // // import dotenv from 'dotenv'
// // // // import AuthRoutes from './routes/Auth.routes.js'
// // // // import DbCon from './config/db.js'
// // // // import cors from 'cors'
// // // // dotenv.config()
// // // // const PORT=process.env.PORT || 4000
// // // // const app=express()

// // // // DbCon()
// // // // app.use(express.json())
// // // // app.use('/auth',AuthRoutes)
// // // // app.listen(PORT,()=>{
// // // //     console.log(`App is running on Port ${PORT}`)
// // // // })

// // // import express from 'express';
// // // import dotenv from 'dotenv';
// // // import cors from 'cors';
// // // import AuthRoutes from './routes/Auth.routes.js';
// // // import DbCon from './config/db.js';

// // // dotenv.config();

// // // const PORT = process.env.PORT || 4000;
// // // const app = express();

// // // // ✅ Connect to DB
// // // DbCon();

// // // // ✅ Middleware
// // // app.use(cors()); // Allow cross-origin requests
// // // app.use(express.json()); // Parse JSON
// // // app.use(express.urlencoded({ extended: true })); // Parse form data

// // // // ✅ Routes
// // // app.use('/auth', AuthRoutes);


// // // // ✅ Start server
// // // app.listen(PORT, () => {
// // //     console.log(`🚀 App is running on Port ${PORT}`);
// // // });


// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";

// // dotenv.config();
// // const app = express();

// // app.use(cors());
// // app.use(express.json()); // <--- THIS is needed
// // app.use(express.urlencoded({ extended: true })); // optional for form data

// // // Your routes here
// // import authRoutes from "../backend/routes/Auth.routes.js";
// // app.use("/api/auth", authRoutes);

// // app.listen(5000, () => {
// //   console.log("🚀 App is running on Port 5000");
// // });


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/Auth.routes.js";
// import DbCon from "./config/db.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Connect to DB
// DbCon();

// // ✅ Middleware
// app.use(cors());
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// // ✅ Routes
// app.use("/auth", authRoutes);

// app.listen(PORT, () => {
//   console.log(`🚀 App is running on Port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/Auth.routes.js";
import DbCon from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to DB
DbCon();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // MUST be before routes
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/auth", authRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 App is running on Port ${PORT}`);
});
