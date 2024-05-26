const { mongoose, Schema } = require("mongoose");

const ticketSchema = new mongoose.Schema({
    ticketNo: {
        type: String,
        required: true,
        // unique: true
    },
    employeeName: {
        type: String,
        required: true,
        // unique: true
    },
    createdDate: {
        type: Date,
        required: true,
    },
    expectedEndDate: {
        type: Date,
        required: true,
    },
    completedDate: {
        type: Date,
        required: true,
    },
    severity: {
        type: String,
        required: true,
    },
    departmentName: {
        type: String,
        required: true,
    },
    assignedTo: {
        type: String,
    },
    state: {
        type: String,
        required: true,
    },
    requestDetails: {
        type: String,
    },
    employeeId: {
        type: [Schema.Types.ObjectId],
        required: true,
        ref: "user"
    },
    departmentID : {
        type: [Schema.Types.ObjectId],
        required: true,
        ref: "Department"
    }
},
)

module.exports = mongoose.model("ticket", ticketSchema);