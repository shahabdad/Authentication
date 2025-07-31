const express =  require('express');
const mongoose =  require('mongoose');
const  dotenv = require('dotenv');
const authRoutes  = require('./routes/authRoutes');


dotenv.config();
const app = express();
app.use(express.json());  
app.use('/api/auth', authRoutes); 


mongoose.connect(process.env.MONGO_URl)
.then( ()  => { 
    app.listen(5000,()  =>  console.log('Server is running on http://localhost:5000')); 
})
.catch(err =>  console.log(err));





