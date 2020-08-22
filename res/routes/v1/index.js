let router = require('express').Router(); 
let app = require('./app')

let stacks =require('../../models/stack')
let course =require('../../models/course')
let posts =require('../../models/post')
// router.get('/',(req,res)=>res.send("api v1"))

app.apps(router,"stack",stacks) 
app.apps(router,"course",course) 
app.apps(router,"post",posts) 

module.exports = router;
