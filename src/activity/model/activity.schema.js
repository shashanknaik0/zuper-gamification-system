const mongoose = require("mongoose");
const schema = mongoose.Schema;

activitySchema = new schema({
    name: String,
    points: Number,
})

activity= mongoose.model('activity',activitySchema);
module.exports = activity;