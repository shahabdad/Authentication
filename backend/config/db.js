// // // config/db.js

// // const mongoose = require('mongoose');

// // const connectDB = async () => {
// //     try {
// //         await mongoose.connect(process.env.MONGO_URL, {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         });
// //         console.log('✅ MongoDB connected successfully');
// //     } catch (error) {
// //         console.error('❌ MongoDB connection failed:', error.message);
// //         process.exit(1); // Stop the app if DB fails to connect
// //     }
// // };

// // module.exports = connectDB;


// import mongoose from "mongoose";

// const DbCon=async()=>{
//     try {
//         await mongoose.connect(process.env.MONGDB_URL)
//         console.log('Mongodb is connected')
//     } catch (error) {
//         console.log('mongosdb connection error',error)
//     }
// }
// export default DbCon


import mongoose from "mongoose";

const DbCon = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB is connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default DbCon;
