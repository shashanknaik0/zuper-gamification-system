const employeeActivity = require('./model/employeeActivity.schema')

exports.create = (req, res) => {
    let newEmployeeActivity = new employeeActivity({
        employee: req.body.employeeId,
        activity: req.body.activityId,
    })

    newEmployeeActivity.save((err, data) => {
        if (err) res.status(400).send(err);

        res.status(201).send(data)
    })
}

exports.list = (req, res) => {
    var year = req.params.year
    var month = req.params.month

    employeeActivity.aggregate([
        {
            $match: {
              'completedAt': {
                $gte: new Date(`${year}-${month}-01`),
                $lt: new Date(`${year}-${parseInt(month)+1}-01`)
              }
            },
          },
        {
            $lookup: {
                from: 'activities',
                localField: 'activity',
                foreignField: '_id',
                as: 'activity',
            },
        },
        {
            $lookup: {
              from: 'employees',
              localField: 'employee',
              foreignField: '_id',
              as: 'employee',
            },
          },
          {
            $unwind: '$activity',
          },
          {
            $unwind: '$employee',
          },
          {
            $group: {
              _id: '$employee._id',
              employee: { $first: '$employee' },
              totalScore: {
                $sum: { $ifNull: ['$activity.points', 0] },
              },
            },
          },
          {
            $sort: { totalScore: -1 }, // Sort by totalScore in descending order (highest score first)
          },
          {
            $project: {
              _id: 0, // Exclude _id field
            },
          },
    ]).exec((err,data)=>{
        if (err) res.status(400).send(err);

        res.send(data)
    })
        
}


exports.listById = (req, res) => {
    var year = req.params.year
    var month = req.params.month
    var empId = req.params.empId
    
    employeeActivity.find({ 
        employee: empId,
        completedAt: {
            $gte: new Date(`${year}-${month}-01`),
            $lt: new Date(`${year}-${parseInt(month)+1}-01`)
        }
    })
    .populate('activity')
    .select({__v:0, employeeId:0})
    .exec((err,data)=>{
        if (err) res.status(400).send(err);

        res.send(data)
    })
}

exports.updateDate = (req, res) => {
    var data = {
        completedAt:new Date(req.body.date)
    }
    employeeActivity.findByIdAndUpdate(req.params.id, data, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null){
            res.status(404).send("No data found with id "+ req.params.id)
        }else{
            res.send(data)
        }
    });
}