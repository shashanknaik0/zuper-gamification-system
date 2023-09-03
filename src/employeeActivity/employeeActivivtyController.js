const employeeActivity = require('./model/employeeActivity.schema')

exports.create=(req,res)=>{
    let newEmployeeActivity = new employeeActivity({
        employeeId:req.body.employeeId,
        activityId:req.body.activityId,
    })

    newEmployeeActivity.save((err,data)=>{
        if (err) res.status(400).send(err);
        
        res.status(201).send(data)
    })
}