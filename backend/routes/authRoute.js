const express = require('express');

const authRoute = express.Router();

authRoute.get('/', async (req, res) => {
    res.send('This is Auth route')
})

module.exports = authRoute;