module.exports = (app) =>{
    router = require('express').Router()
    employee = require('../src/employee/employeeController')
    activity = require('../src/activity/activityController')
    employeeActivity = require('../src/employeeActivity/employeeActivivtyController')

    router.get('/',(req,res)=>{
        res.send('hello word')
    })

    router.post('/employee', employee.create)
    router.get('/employee', employee.read)
    router.put('/employee/:id', employee.update)
    router.delete('/employee/:id', employee.delete)
    
    router.post('/activity', activity.create)
    router.get('/activity', activity.read)
    router.put('/activity/:id', activity.update)
    router.delete('/activity/:id', activity.delete)

    router.post('/employeeActivity', employeeActivity.create)

    app.use(router)
}