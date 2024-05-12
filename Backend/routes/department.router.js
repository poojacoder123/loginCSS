const express = require("express");
const router = express.Router();
const Department = require("../models/department.model");
const departmentModel = require("../models/department.model");

router.post("/create/department",async(req,res,next)=>{
   
    const newDepartment = new Department({
      departmentName : req.body.departmentName ,
      departmentHead : req.body.departmentHead  
    })
    await newDepartment.save();
    return res.status(200).send("department created")
    } )

router.get("/getAllDepartment", async(req,res,next)=>{
    try {
   let allDepartment = await Department.find();
   console.log(allDepartment)
    return res.status(201).json(allDepartment)
    } catch (error) {
        return res.status(501).json(err);
    }
})

router.get("/update/:id", async(req,res,next)=>{
    const id = req.params._id;
    try {
     const  idData  = await Department.findById({_id : id});
     await idData.updateOne();
     return res.status(205).send("updated")

    } catch (error) {
        
    }
})


module.exports = router