const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

const mongodbSetup = require('./helper/mongodb')
mongodbSetup()

const router = require('./router/router')
router(app)

app.listen(PORT,()=>{
	console.log('(ctrl + click) http://localhost:3000/')
})