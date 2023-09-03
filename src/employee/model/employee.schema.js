const mongoose = require("mongoose");
const schema = mongoose.Schema;

employeeSchema = new schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
})

employee = mongoose.model('employee',employeeSchema);
module.exports = employee;