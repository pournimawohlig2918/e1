const mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
id:{
    type: Number,
    required: true,
    unique: true
},
username:{
    type: Boolean,
required: true
},

password:{
type: Boolean,
required: true
},
email:{
    type: String, 
    required: true,
    unique: true
},
salary:String,

})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;