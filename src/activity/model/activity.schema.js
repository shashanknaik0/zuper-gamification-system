const mongoose = require("mongoose");
const schema = mongoose.Schema;

activitySchema = new schema({
    name:{
        type : String,
        required: true,
    },
    points:{
        type : Number,
        required: true,
    },
})

activity= mongoose.model('activities',activitySchema);
module.exports = activity;