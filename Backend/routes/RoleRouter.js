const express = require("express");
const router = express.Router();
const Role = require("../models/RoleModel")

router.post("/", async(req,res,next)=>{
    try {
        if(req.body.roles && req.body.roles!==""){
            const newRole = new Role(req.body);
           await newRole.save();
           res.json(newRole); 
        }
        else{
            return res.status(400).send("bad request")
        }
    } catch (error) {
        return res.status(500).send("internal server error")
    }
})

router.get("/get", async(req,res)=>{
    try {
     const Getrole =await Role.find();
     res.json(Getrole);
    } catch (error) {
     res.send(`error ${error}`)
    }
 })

module.exports = router;
    