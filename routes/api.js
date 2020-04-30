var router = require('express').Router();
let v1 = require('./v1/index')

router.use('/v1', v1); 
router.get('/',(req,res)=>
    res.send(`<a href="/api/v1">v1</a>`).end())

module.exports = router;