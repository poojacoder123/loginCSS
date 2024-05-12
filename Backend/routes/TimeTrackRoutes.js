const express = require("express");
const router = express.Router();
const TimeTrack = require("../models/TimeTrachModel")

router.post("/", async(req,res,next)=>{
    try {
        const newTimeTrack = new TimeTrack({
            currentDate: req.body.currentDate,
            clockIn: req.body.clockIn,
            lunchIn: req.body.lunchIn,
            lunchOut: req.body.lunchOut,
            clockOut: req.body.clockOut,
            userId: req.body.userId,
            userEmail: req.body.userEmail,
            totalHours: req.body.totalHours,    
            })
            await newTimeTrack.save();
            return res.status(200).send("time created")
    } catch (error) {
        console.log("error", error)
    }

})

router.get("/get/:id", async(req,res,next)=>{
    const userUniqueId = req.params.userUniqueId;
    try {
        const todayStart = new Date();
        todayStart.setHours(0,0,0,0);
        const todayEnd = new Date();
        todayEnd.setHours(23,59,59,999);
        const existingEntry = await TimeTrack.findOne({
          userUniqueId : userUniqueId,
          clockIn:{$gte: todayStart, $lte: todayEnd}
        })
        if(existingEntry){
          console.log("already exist entry");
          return res.json({alreadyClockedIn: true,
            existingEntry
        }); 
        }
          else{console.log("not clocked in yet")}
    } catch (error) {
        res.send(`error ${error}`)
    }
   
})

module.exports = router;