const express = require('express');

const userRoute = express.Router();

userRoute.get('/', async (req, res) => {
    res.send('This is User route')
})

module.exports = userRoute;