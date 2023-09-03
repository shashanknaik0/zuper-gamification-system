module.exports = (app) =>{
    router = require('express').Router()
    employee = require('../src/employee/employeeController')

    router.get('/',(req,res)=>{
        res.send('hello word')
    })

    router.post('/employee', employee.create)
    router.get('/employee', employee.read)
    router.put('/employee/:id', employee.update)
    router.delete('/employee/:id', employee.delete)
    
    app.use(router)
}