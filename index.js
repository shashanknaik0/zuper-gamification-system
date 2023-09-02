const express = require("express")
const mongoose = require("mongoose")

const app = express()

const PORT = process.env.PORT || 3000
const mongoURI = process.env.mongoURI || 'mongodb://127.0.0.1:27017/test'

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

db = mongoose.connection
db.on('error', console.error.bind("Database connection error"))
db.once('open', () => {
	console.log("Database connected")
})

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.listen(PORT,()=>{
	console.log('(ctrl + click) http://localhost:3000/')
})