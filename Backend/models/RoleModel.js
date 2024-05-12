
const mongoose = require("mongoose");

const RoleSchema= new mongoose.Schema({
    roles: {
        type: String,
        required: true
    },
    
},
{Timestamp: true}

)

module.exports = mongoose.model("Role", RoleSchema);

// {
//     "roles": "HR"
// }