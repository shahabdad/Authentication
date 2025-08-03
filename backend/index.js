const express =  require('express');
const mongoose =  require('mongoose');
const  dotenv = require('dotenv');
const authRoutes  = require('./routes/authRoutes');
const cors = require('cors'); 
const connectDB = require('./config/db');
dotenv.config();
const app = express();

//  frontend  from  live server 
app.use(cors({ 
    origin:'http://127.0.0.1:5500', 
    methods : ['GET','POST'],
    credentials: true,
}));
app.use(express.json());  
app.use('/api/auth', authRoutes); 


    connectDB().then(() => {
    app.listen(5000, () => {
        console.log('🚀 Server is running on http://localhost:5000');
    });
}).catch((err) => {
    console.error('❌ Server failed to start:', err.message);
});
