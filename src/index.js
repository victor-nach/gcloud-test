const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.status(200).json({
    status: 200,
    message: 'welcome !',
}));

app.get('/info', (req, res) => res.status(200).json({
    status: 200,
    name: `my name is ${process.env.NAME}.`,
    age: `${process.env.AGE} years old.`
}));   

app.listen(port, () => console.log(`serving app on port ${port}`) );