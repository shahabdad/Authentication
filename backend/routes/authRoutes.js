
const express = require('express');
const { register, VerfiyEmail } = require('../controllers/authControllers');
const router = express.Router();
// const { register, login, getUsers, verifyOTP } = require('../controllers/authControllers');

router.post('/register', register);
router.post('/login', login);
router.get('/users',getUsers); 
router.post('/verify-otp', verifyOTP);  
AuthRouter.get('/verify-otp',verifyOTP);
AuthRouther.post("/VerfiyEmail",VerfiyEmail)

module.exports = router;
