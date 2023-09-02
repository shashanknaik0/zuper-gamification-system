module.exports = () =>{
    const mongoose = require("mongoose")

    const mongoURI = process.env.mongoURI || 'mongodb://127.0.0.1:27017/test'

    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    db = mongoose.connection
    db.on('error', console.error.bind("Database connection error"))
    db.once('open', () => {
        console.log("Database connected")
    })
}