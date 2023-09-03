const mongoose = require("mongoose");
const schema = mongoose.Schema;

employeeActivitySchema = new schema({
    employeeId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'employee',
        required: true,
        validate: {
            validator: async function (value) {
                const employee = await mongoose.model('employee').findById(value);
                return employee !== null;
            },
            message: 'Invalid employeeId, employee does not exist.',
        },
    },
    activityId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'activity',
        required: true,
        validate: {
            validator: async function (value) {
                const employee = await mongoose.model('activity').findById(value);
                return employee !== null;
            },
            message: 'Invalid activityId, activity does not exist.',
        },
    },
    completedAt: {
		type: Date,
		default: Date.now
	}
})

employeeActivity= mongoose.model('employeeActivity',employeeActivitySchema);
module.exports = employeeActivity;