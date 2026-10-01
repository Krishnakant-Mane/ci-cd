import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send('Server is Running Docker Applied! This is so good!');
})

app.get('/health',(req,res) => {
    res.send('OK All good!');
})

app.get('/calculate',(req,res) => {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    const sum = num1 + num2;
    res.send(`Sum of ${num1} and ${num2} is ${sum}`);
})

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
})
