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

router.get("/:id", async(req,res,next)=>{
    const id = req.params.id;
    try {  
     const  idData  = await Department.findById({_id: id});
       console.log(idData)
     return res.json(idData);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


router.patch("/update/:id", async(req,res,next)=>{  

   try {
    const id = req.params.id;
    const department = await Department.findByIdAndUpdate(id, req.body);
    console.log(department)
    if(!department){
        return res.status(400).json({message :"department not found"})
    }
     
    return res.status(200).send("success true")
   } catch (error) {
    res.status(500).json({message: error.message});
   }
    
})

router.delete("/delete/:id", async(req,res,next)=>{
try {
    const id = req.params.id;
    console.log(id)
    const deleteDep = await Department.findByIdAndDelete(req.params.id);
    console.log(deleteDep)
     return res.send(deleteDep)
} catch (error) {
    res.status(500).json({message: error.message}); 
}
})

module.exports = router