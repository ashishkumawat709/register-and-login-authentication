const express = require('express')
const app = express()
const mongoose = require('./db/connectDB')
const web = require('./routes/web')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use('/', web) 


app.listen('2000', ()=>{
    console.log('listening 2000');
})