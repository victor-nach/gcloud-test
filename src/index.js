const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.status(200).json({
    status: 200,
    message: 'welcome !',
}));

app.listen(port, () => console.log(`serving app on port ${port}`) );