const mongoose = require('mongoose');

const connectDB = async() => {
    try{
mongoose.connect('mongodb://localhost:27017/employeedata', {
    useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.')}
    else 
    { 
        console.log('Error in DB connection : ' + err)}
})
}catch(err) {

}
}

module.exports = connectDB;
