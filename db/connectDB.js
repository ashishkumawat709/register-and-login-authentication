const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/userDB')
.then(()=>{
    console.log('connected');
})
.catch((err)=>{
    console.log(err, 'some error occured');
})

module.exports = mongoose