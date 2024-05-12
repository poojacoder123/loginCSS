// const { Timestamp } = require("mongodb");
const {mongoose, Schema} = require("mongoose");

const userschema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
     
    },
    gender: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    role: {
        type:[Schema.Types.ObjectId],
        required: true, 
        ref: "Role"
    },
    departmentId: {
        type:[Schema.Types.ObjectId],
        required: true, 
        ref: "Department"
    }
   
},
{TimeStamps: true}

)

module.exports = mongoose.model("user", userschema);


// http://localhost:3000/api/register

// {  
//     "employeeName": "aNSHIKA AGRAWAL",
//     "contactNo": "1234567890",
//     "email" : "abc@gmail.com",
//     "password" : "1234",
//     "gender" : "female"
 
  
//  }