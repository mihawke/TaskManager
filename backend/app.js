const express = require('express')
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const taskRoute = require('./routes/taskRoute');
require('dotenv').config();

const app = express();

app.use(cors());

app.use('/user', userRoute);
app.use('/task', taskRoute);
app.use('/auth', authRoute);

app.listen(process.env.PORT, console.log('server started on PORT:', process.env.PORT))