const mongoose = require("mongoose");

const departmentSchema= new mongoose.Schema({
    departmentName: {
        type: String,
        required: true
    },
    departmentHead: {
        type: String,
        
    },
    
},
{Timestamp: true}

)

module.exports = mongoose.model("Department", departmentSchema);
