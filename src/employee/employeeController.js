const employee = require('./model/employee.schema')

exports.create=(req,res)=>{
    let newEmployee = new employee({
        name:req.body.name,
        email:req.body.email,
    })

    newEmployee.save((err,data)=>{
        if (err) res.status(400).send(err);
        
        res.status(201).send(data)
    })
}

exports.read=(req,res)=>{
    employee.find({},{__v:0}).exec((err,data)=>{
        if (err) res.status(400).send(err);

        res.send(data)
    })
}

exports.update=(req,res)=>{
    employee.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null){
            res.status(404).send("No data found with user id "+ req.params.id)
        }else{
            res.send(data)
        }
      });
}

exports.delete=(req,res)=>{
    employee.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null){
            res.status(404).send("No data found with user id "+ req.params.id)
        }else{
            res.send(data)
        }
      });
}

