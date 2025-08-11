// import nodemailer from "nodemailer";
// const nodemailer = require("nodemailer");


// // Create a test account or replace with real credentials.
// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "shahabdad50@gmail.com",
//     pass: "jn7jnAPss4f63QBp6D",
//   },
// });

// Email.config.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email", // Or your real SMTP host
  port: 587, // 465 for secure, 587 for non-secure
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // from .env
    pass: process.env.EMAIL_PASS, // from .env
  },
});

export default transporter;
