var Userdb = require('../model/model');

// create and save new user 
exports.create = (req,res) => {
// validate request
if(!req.body){
    res.status(400).send({message:"Content can not be empty!"});
    return;
}
//new user
const user = new Userdb({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    salary: req.body.salary
});

//save user in the database
user
.save(user)
.then(data => {
    res.send(data)
})
.catch(err =>{
res.status(500).send({
    message: err.message || "Some error occurred while creating acreate operation"
});
}).lean();
}

// retrieve and return all users/ a single user 
exports.find = (req,res) => {
    
}

// Update a new identified user by user id
exports.update = (req,res) => {

}

//Delete a user with specified user id in the request
exports.delete = (req,res) => {

}