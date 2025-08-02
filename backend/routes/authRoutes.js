
const express = require('express');
const router = express.Router();
const { register, login, getUsers, verifyOTP } = require('../controllers/authControllers');

router.post('/register', register);
router.post('/login', login);
router.get('/users',getUsers); 
router.post('/verify-otp', verifyOTP);  

module.exports = router;
