var express = require('express'); 
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
let config=require('./res/bin/config') 
 
var app = express();
app.use(cors())
// view engine setup 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use('/api', require('./res/routes/api')); 

// catch 404 and forward to error handler

app.get('/',(req,res)=>{
  res.send('/dsvapi');
  res.end()
})
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500); 
});
app.listen(config.port,()=>console.log(`http://localhost:${config.port}`));

module.exports = app;
