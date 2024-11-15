const express = require('express');

const taskRoute = express.Router();

taskRoute.get('/', async (req, res) => {
    res.send('This is Task route')
})

module.exports = taskRoute;