const mongoose = require('mongoose');

const connectDB = async() => {
    try{
// mongodb connection string
const con = await mongoose.connect(process.env, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
 })
    }catch(err){

    }
}
module.exports = connectDB;