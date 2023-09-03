const activity = require('./model/activity.schema')

exports.create=(req,res)=>{
    let newActivity = new activity({
        name:req.body.name,
        points:req.body.points,
    })

    newActivity.save((err,data)=>{
        if (err) res.status(400).send(err);
        
        res.status(201).send(data)
    })
}

exports.read=(req,res)=>{
    activity.find({},{__v:0}).exec((err,data)=>{
        if (err) res.status(400).send(err);

        res.send(data)
    })
}

exports.update=(req,res)=>{
    activity.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null){
            res.status(404).send("No data found with activity id "+ req.params.id)
        }else{
            res.send(data)
        }
      });
}

exports.delete=(req,res)=>{
    activity.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) res.status(400).send(err);

        if (data === null){
            res.status(404).send("No data found with user id "+ req.params.id)
        }else{
            res.send(data)
        }
      });
}

