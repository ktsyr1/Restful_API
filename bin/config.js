
var mongoose = require('mongoose');
const uri =  process.env.DB_URL 
    // || 'mongodb+srv://ktsyria:j83XxiNsNQYz!Me@cluster0-6xfyu.mongodb.net/test?retryWrites=true&w=majority'
    ||'mongodb://localhost:27017/app'

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