import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send('Server is Running Docker Applied! This is so good!');
})

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
})
