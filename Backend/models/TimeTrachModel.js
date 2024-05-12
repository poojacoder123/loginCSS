// const { Timestamp } = require("mongodb");
const {mongoose, Schema} = require("mongoose");

const TimeTrack = new mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },
    currentDate: {
        type: Date,
        required: true,
       
    },
    clockIn: {
        type: Date,
        default: null
        
       
    },
    lunchIn: {
        type: Date,
        Default: null 
    },
    lunchOut: {
        type: Date,
        Default: null 
    },
    clockOut: {
        type:Date ,
        default: null
    },
    totalHours:
    {
    type: Number,
    default: null
    },
    userEmail: {
        type:String,
        required: true, 
       
    }
},
{TimeStamps: true}

)

module.exports = mongoose.model("timeTrack", TimeTrack);

// {
//     "userId": "12345",
//     "currentDate": " Wed Apr 03 2024 14:11:58 GMT+0530 (India Standard Time)",
//     "clockIn": " Wed Apr 03 2024 14:11:58 GMT+0530 (India Standard Time)",
//      "clockOut": " Wed Apr 03 2024 14:11:58 GMT+0530 (India Standard Time)",
//      "lunchIn": " Wed Apr 03 2024 14:11:58 GMT+0530 (India Standard Time)",
//      "lunchOut": " Wed Apr 03 2024 14:11:58 GMT+0530 (India Standard Time)",
//      "userEmail": "abc@gmail.com",
//      "totalHours": "10"


// }
// http://localhost:3000/api/timeTrack/get
// http://localhost:3000/api/timeTrack