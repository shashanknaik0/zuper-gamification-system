module.exports = () =>{
    const mongoose = require("mongoose")

    const mongoURI = process.env.mongoURI || 'mongodb://127.0.0.1:27017/test2'

    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    mongoose.set('useCreateIndex', true) // to remove (node:8172) Deprecation

    db = mongoose.connection
    db.on('error', console.error.bind("Database connection error"))
    db.once('open', () => {
        console.log("Database connected")
    })
}