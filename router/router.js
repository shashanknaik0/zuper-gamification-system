module.exports = (app) =>{
    router = require('express').Router()

    router.get('/',(req,res)=>{
        res.send('hello word')
    })
    
    app.use(router)
}