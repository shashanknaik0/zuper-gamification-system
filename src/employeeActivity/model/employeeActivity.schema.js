const mongoose = require("mongoose");
const schema = mongoose.Schema;

employeeActivitySchema = new schema({
    employeeId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'employee',
        required: true,
    },
    activityId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'activity',
        required: true,
    },
    completedAt: {
		type: Date,
		default: Date.now
	}
})

employeeActivity= mongoose.model('employeeActivity',employeeActivitySchema);
module.exports = employeeActivity;