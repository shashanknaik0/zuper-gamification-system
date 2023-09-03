// to seed random data
const mongoose = require('mongoose');
const mongodbSetup = require('./mongodb')
mongodbSetup()

db = mongoose.connection

const employee = require('../src/employee/model/employee.schema')
const activity = require('../src/activity/model/activity.schema')
const employeeActivity = require('../src/employeeActivity/model/employeeActivity.schema')

const employees = [
    {
        "_id": "64f42f50d5b1cd12748f8ef6",
        "name": "shashank",
        "email": "shashi@gmail.com"
    },
    {
        "_id": "64f42f5cd5b1cd12748f8ef8",
        "name": "abc",
        "email": "abc@gmail.com"
    },
    {
        "_id": "64f42f68d5b1cd12748f8efa",
        "name": "xyz",
        "email": "xyz@gmail.com"
    }
];

const activities = [
    {
      "_id": "64f4344c042d8411e46815e2",
      "name": "webinar",
      "points": 20
    },
    {
      "_id": "64f434a7042d8411e46815e5",
      "name": "Tech Talks",
      "points": 15
    },
    {
      "_id": "64f434df042d8411e46815e8",
      "name": "Training Workshops",
      "points": 10
    },
    {
      "_id": "64f43500042d8411e46815ea",
      "name": "Health and Wellness Activities",
      "points": 10
    },
    {
      "_id": "64f43514042d8411e46815ec",
      "name": "Mentorship Programs",
      "points": 20
    }
  ];

const employeeActivities = [
    {
        "employee": "64f42f68d5b1cd12748f8efa",
        "activity": "64f4344c042d8411e46815e2"
    },
    {
        "employee": "64f42f68d5b1cd12748f8efa",
        "activity": "64f43500042d8411e46815ea"
    },
    {
        "employee": "64f42f50d5b1cd12748f8ef6",
        "activity": "64f43514042d8411e46815ec"
    },
    {
        "employee": "64f42f50d5b1cd12748f8ef6",
        "activity": "64f4344c042d8411e46815e2"
    },
    {
        "employee": "64f42f5cd5b1cd12748f8ef8",
        "activity": "64f434df042d8411e46815e8"
    },
]


db.once('open', async() => {
    await employee.insertMany(employees)
    .then(() => {
        console.log('Inserted empoyee documents');
    })

    await activity.insertMany(activities)
    .then(() => {
        console.log('Inserted activity documents');
    })

    await employeeActivity.insertMany(employeeActivities)
    .then(() => {
        console.log('Inserted employeeActivity documents');
    })

    mongoose.connection.close();
})