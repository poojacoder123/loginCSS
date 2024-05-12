const express = require("express");
const router = express.Router();
const User = require("../models/AlienModel")
const Role = require("../models/RoleModel");
const bcrypt = require('bcryptjs');
const departmentModel = require("../models/department.model");

 router.post("/",async(req,res,next)=>{
   const roleFind = await Role.find({roles: "Employee"});
   const deptFind = await departmentModel.find({departmentName : "Software Testing"})
   console.log(roleFind)
   var salt =await bcrypt.genSaltSync(10);
   var hash =await bcrypt.hashSync(req.body.password, salt);
   const newUser = new User({
       employeeName:req.body.employeeName,
       gender:req.body.gender,
    contactNo: req.body.contactNo,
       emailId:req.body.emailId,
       password:hash,
       role:roleFind,
       departmentId : deptFind
    
       
   })
   await newUser.save();
   return res.status(200).send("user created")
   } )

   router.post("/login", async(req,res,next)=>{
      try {
         const user = await User.findOne({email: req.body.email});
         if(!user){
            return res.status(400).send("user not found")
         }
       
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
      if(!isPasswordCorrect){
         return res.status(400).send("Password Incorrect")
      }
      return res.json(user);
      } catch (error) {
         
      }
   })

   //get User API

   router.get("/getUser", async(req,res,next)=>{
      try {
         let allUser = await User.find();
         return res.json(allUser)
      } catch (error) {
        return  res.status(300)
      }
   })

   

module.exports= router;