const { response } = require('express');
var employeedata = require('../model/model');
var mongoose = require('mongoose');

// create and save new user 
exports.create = (req,res) => { 
// validate request
if(!req.body){
    console.log("create data", data)
    res.status(400).send({message:"Content can not be empty!"});
    return;
}
//console.log("create",req.body);
//new user
const user = new employeedata({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    salary: req.body.salary
});

//console.log("what a data",user);

//save user in the database
user
.save(user)
.then(data => {
  // res.json(data)
  res.send(data)
  //res.redirect('add-user')
})
.catch(err =>{
res.status(301).json({
    message: err.message || "Some error occurred while creating a create operation"
});
})
}

// retrieve and return all users/ a single user 
exports.find = async (req,res) => {
   try{
    let { page, size, sort } = req.query;
    if (!page) {
        page = 1;

    }
    if (!size) {
        size = 10;

    }


    const limit = parseInt(size);
    let count = await employeedata.count();
    const skipIndex = (page - 1) * limit;
    const employees = await employeedata.find().sort(
        {
            name: 1,

        }
    ).limit(limit)
        .skip(skipIndex)
        // let totalpages =  Math.ceil (count/ limit) 
        // let previous = page -1
        // let next = (totalpages -page)
    res.json({ page, size,employees, count});

}
catch (error) {
    res.sendStatus(500);
}
  
} 


// Update a new identified user by user id
exports.update = async (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})
    }
    const id = req.params.id;
  console.log("updatekkk",req.body)
    console.log("to", typeof(req.body))
    let data = {
        id: req.body.id,
        username: req.body.username,
        salary: req.body.salary,

    }
    console.log("updatekkk",id,data)

 let ed = await employeedata.findOne({_id : id})
 if(!ed){
    res.send({message: "user not found"});
 }
 

 let emp = await employeedata.updateOne({_id : id} , data)
 //res.send(emp)

 if(emp.modifiedCount == 0){
 res.send({message: "not updated"})
 }else{
     res.send({message: "successfully updated"});
 }
}

//Delete a user with specified user id in the request
exports.delete = async (req,res) => {
const id = req.params.id;


let em = await employeedata.deleteOne({_id : id})
  if(em.deletedCount == 0 ){
 res.json({message : " error record not delete "})
}else {

    res.json({message:"successfully deleted"});
}
}
