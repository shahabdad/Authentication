const express =  require('express');
const mongoose =  require('mongoose');
const  dotenv = require('dotenv');
const authRoutes  = require('./routes/authRoutes');
const connectDB = require('./config/db');


dotenv.config();
const app = express();

// connectDB();

app.use(express.json());  
app.use('/api/auth', authRoutes); 



// mongoose.connect(process.env.MONGO_URL)
//     .then(() => {
//         app.listen(5000, () => {
//             console.log('Server is running on http://localhost:5000');
//         });
//     })
//     .catch((err) => {
//         console.error('MongoDB connection error:', err.message);
//     });


    connectDB().then(() => {
    app.listen(5000, () => {
        console.log('🚀 Server is running on http://localhost:5000');
    });
}).catch((err) => {
    console.error('❌ Server failed to start:', err.message);
});
