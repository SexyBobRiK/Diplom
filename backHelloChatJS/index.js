const express = require('express');
const cors = require('cors');
const connectDatabase = require('./DB/connectDb');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth', require('./routes/authRouter'));

const startServer = async () => { 
    try {
       await connectDatabase();
       await app.listen(3000, () => console.log('Server is running on port 3000'));
    } catch (error) {
        console.error('Error starting server', error);
    }
 }

 startServer();