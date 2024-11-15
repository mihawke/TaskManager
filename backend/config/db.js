const mongoose = require('mongoose')

const DB_STRING = process.env.DB_STR
mongoose.connect(DB_STRING)
.then(()=>console.log('MongoDB connected!'))
.catch((err)=>console.log(err))

module.exports = mongoose;