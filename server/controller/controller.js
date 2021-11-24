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
// console.log("paginate")
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
        // let next = Math.ceil(totalpages -page)
    res.json({ page, size,employees, count});
    //res.json(posts)
}
catch (error) {
    res.sendStatus(500);
}
    // const myCustomLabels = {
    //     totalDocs: 'itemCount',
    //     docs: 'itemsList',
    //     limit: 'perPage',
    //     page: 'currentPage',
    //     nextPage: 'next',
    //     prevPage: 'prev',
    //     totalPages: 'pageCount',
    //     pagingCounter: 'slNo',
    //     meta: 'paginator',
    //   };
      
    //   const options = {
    //     page: 1,
    //     limit: 10,
    //     customLabels: myCustomLabels,
    //   };
      
    //   Model.paginate({}, options, function (err, result) {
    //     // result.itemsList [here docs become itemsList]
    //     result.paginator.itemCount = 100 
    //     result.paginator.perPage = 10
    //     result.paginator.currentPage = 1 
    //     result.paginator.pageCount = 10 
    //     result.paginator.next = 2 
    //     result.paginator.prev = null 
    //     result.paginator.slNo = 1 
    //     // result.paginator.hasNextPage = true
    //     // result.paginator.hasPrevPage = false
    //   });
      
//     const page = parseInt(req.body.page);
//     //const limit = parseInt(req.body.limit);
// const limit = 10;
//     const startIndex = (page - 1) * limit;
//     const endIndex = (page * limit) -1;

    
//     const results = {};
//     if (startIndex > 0) {
//         results.previous = {
//             page: page - 1,
//             limit: limit,
//         };
//     }
//     if (endIndex < 1) {
//         results.next = {
//             page: page + 1,
//             limit: limit,
//         };
//     }


//         //console.log("inside else")
//         const user = await employeedata.find().limit(limit).skip(startIndex).sort({ createdAt: 1 }).exec();
//         if(!user) {
//             res.results.json("no user found")
//         }
//        console.log("pagination",user)
//         res.json({user});

// }  catch(err){
// res.send("show error");
// }
        
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

// employeedata.findByIdAndDelete(id)
// .then(data => {
//         if(!data){
//             console.log("delete data",data)
//             res.status(404).send({ message: `Cannot delete with id ${id}. Maybe id is wrong`})
//         }else{
//             res.send({deleted})  
//         }
// })
// .catch(err =>{
//     res.status(500).send({
//         message: "Could not delete User with id=" +id
//     });
// });

let em = await employeedata.deleteOne({_id : id})
if(em.deletedCount == 0 ){
 res.json({message : " error record not delete "})
}else {

    res.send(em);
}
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