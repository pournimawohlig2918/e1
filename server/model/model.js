const mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
id:{
    type: Number,
    required: true
},
username:{
    type: String,
required: true
},

password:{
type: String,
required: true
},
email:{
    type: String, 
    required: true
},
salary:{
type:Number,
title: 'salary'
}
})

const employeedata = mongoose.model('Employee',schema);

module.exports = employeedata;