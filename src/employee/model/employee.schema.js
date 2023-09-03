const mongoose = require("mongoose");
const schema = mongoose.Schema;

employeeSchema = new schema({
    name:{
        type : String,
        required: true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
    },
})

employee = mongoose.model('employees',employeeSchema);
module.exports = employee;