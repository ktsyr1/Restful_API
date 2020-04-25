exports.apps=(r,app,db)=>{
    r.get('/',(req,res)=>
        res.send(`${app}`).end()
    )
    r.route(`/${app}`)
        .get((req,res)=>{
            db.find({}, (err, app) => {  
                res.status(200).json(app).end()  
            })
        })
        .post((req,res)=>{   
            db.create(req.body,  (err, app)=> {  
                if (err) return res.json(err); 
                res.json(app); 
            });
        })

    r.route(`/${app}/:id`)
        .get((req,res)=>{
            db.findOne({_id:req.params.id},(err,app)=>{ 
                if (!err) res.status(200).json(app) 
                res.end()
            })
        })
        .put((req,res)=>{ 
            const filter ={_id:req.params.id}
            db.updateOne(filter, {$set:req.body}, (err, data)=>{
                if (err) console.log(err);
                res.status(200).json('true update') 
            });
        })

    r.route(`/${app}/delete/:id`)
        .get((req, res) => {
            db.deleteOne({ _id: req.params.id }, (err) => {
                if (err) res.json(err)
            });
        })
}