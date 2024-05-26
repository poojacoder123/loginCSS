const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/hrmDatabase";
const roleRoutes = require("./routes/RoleRouter")
const userRouter = require("./routes/userRoutes");
const TimeTrack = require("./routes/TimeTrackRoutes")
const Department = require("./routes/department.router")
const Ticket  = require("./routes/ticketRouter")

require("dotenv").config;



mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('open', ()=>{
    console.log("database connected")
})
app.use(express.json())
app.use(cors());

app.use("/api/role",roleRoutes );
app.use("/api/register", userRouter);
app.use("/api/", userRouter);
app.use("/api/timeTrack", TimeTrack);
app.use("/api/timeTrack/", TimeTrack);
app.use("/api", Department)
app.use("/api/ticket", Ticket);


app.listen(3000, ()=>{
    console.log("server running")
})




