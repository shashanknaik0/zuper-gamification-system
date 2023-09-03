const mongoose = require("mongoose");
const schema = mongoose.Schema;

employeeActivitySchema = new schema({
    employee:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'employees',
        required: true,
        validate: {
            validator: async function (value) {
                const employee = await mongoose.model('employees').findById(value);
                return employee !== null;
            },
            message: 'Invalid employeeId, employee does not exist.',
        },
    },
    activity:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'activities',
        required: true,
        validate: {
            validator: async function (value) {
                const employee = await mongoose.model('activities').findById(value);
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

employeeActivity= mongoose.model('employeeActivities',employeeActivitySchema);
module.exports = employeeActivity;