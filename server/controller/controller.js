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
//console.log("gdh",req.body);
//new user
const user = new employeedata({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    salary: req.body.salary
});

//console.log("fgqyghgswhq",user);

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
    const page = parseInt(req.body.page);
    const limit = parseInt(req.body.limit);

    const startIndex = (page - 1) * limit;

    
    const results = {};


        //console.log("inside else")
        const user = await employeedata.find().limit(limit).skip(startIndex).sort({ createdAt: 1 }).exec();
        if(!user) {
            res.send("no user found")
        }
       console.log("pagination",user)
        res.json({user});

}  catch(err){
res.send("show error");
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
 res.send(ed);

//     employeedata.findByIdAndUpdate({_id: .ObjectId},
//         data)
//     .then(data =>{
//         if(data){
//             console.log("update data",data)

//             res.status(201).json({message : `updated successfully`})
//         }
// //         if(!data == data){
// // res.status(201).json({message : `updated....`})
// //         }
//         else{
//             res.json({message: `Cannot update user with ${id}. Maybe user not found!`})
//                // message : "User Updated successfully"
//         }
//     })
// .catch(err =>{
//     res.status(301).json({message : "Error Update user information"})
// })
}

//Delete a user with specified user id in the request
exports.delete = async (req,res) => {
const id = req.params.id;

employeedata.findByIdAndDelete(id)
.then(data => {
        if(!data){
            console.log("delete data",data)
            res.status(404).send({ message: `Cannot delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({deleted})  
        }
})
.catch(err =>{
    res.status(500).send({
        message: "Could not delete User with id=" +id
    });
});

let em = await employeedata.deleteOne({_id : id})
 res.send(em);
}


// var pageCount =  (".setPagination").length / pageSize;

// for(var i = 0 ; i<pageCount;i++){
//     $("#pagin").append('<li><a href="#">'+(i+1)+'</a></li> ');
// }
// $("#pagin li").first().addClass("active")
// showPage = function(page) {
//     $(".setPagination").hide();
//     $(".setPagination").each(function(n) {
//         if (n >= pageSize * (page - 1) && n < pageSize * page)
//             $(this).show();
//     });        
// }
// showPage(1);

// $("#pagin li").click(function() {
//     $("#pagin li").removeClass("active");
//     $(this).addClass("active");
//     showPage(parseInt($(this).text())) 
// });