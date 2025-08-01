
const express = require('express');
const router = express.Router();
const { register, login, getUsers } = require('../controllers/authControllers');

router.post('/register', register);
router.post('/login', login);
router.get('/users',getUsers)

module.exports = router;
