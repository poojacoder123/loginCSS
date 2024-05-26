const express = require("express");
const router = express.Router();
const Ticket = require("../models/TicketModel");
const EmployeeModel = require("../models/AlienModel");
const DepartmentModel = require("../models/department.model.js");
const { v4: uuidv4 } = require('uuid');

router.post("/add", async(req,res,next)=>{
    try {
        const createdDate = new Date();
        const endDate =new Date();
        const expectedEndDate = new Date();
        const ticketNumber = uuidv4();
        console.log(ticketNumber)
        let empAssignment = req.body.employeeName;
   let depAssignment = req.body.departmentName;
   const empFind = await EmployeeModel.find({employeeName: empAssignment});
   const deptFind = await DepartmentModel.find({departmentName : depAssignment})
        const newTicket = new Ticket({
        
            ticketNo : ticketNumber,
            employeeName: req.body.employeeName,
            createdDate: createdDate,
            expectedEndDate: expectedEndDate ,
            completedDate:endDate, 
            severity:req.body.severity ,
            departmentName:req.body.departmentName ,
            assignedTo: req.body.assignedTo,
            state: req.body.state,
            requestDetails:req.body.requestDetails ,
            employeeId:empFind ,
            departmentID:deptFind ,

        })

        await newTicket.save();
        return res.status(200).json(newTicket);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;