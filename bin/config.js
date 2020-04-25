
var mongoose = require('mongoose');
const uri =  process.env.DB_URL || 'mongodb+srv://ktsyr1:idlibtp123@cluster0-6xfyu.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
    else console.log('db connected api'); 
});

module.exports = {
    port : process.env.PORT  || 5000, 
}