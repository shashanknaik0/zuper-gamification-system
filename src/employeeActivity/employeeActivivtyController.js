const employeeActivity = require('./model/employeeActivity.schema')

exports.create = (req, res) => {
    let newEmployeeActivity = new employeeActivity({
        employeeId: req.body.employeeId,
        activityId: req.body.activityId,
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
                localField: 'activityId',
                foreignField: '_id',
                as: 'activity',
            },
        },
        {
            $lookup: {
              from: 'employees',
              localField: 'employeeId',
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