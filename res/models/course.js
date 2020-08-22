const mongoose = require('mongoose') 
// stack schema
const appSchema = mongoose.Schema({
    name: { type: String },
    in: { type: String },
    time: { type: String },
    link: { type: String },
    adding: { type: String },
    tools:  String 
})

module.exports =  mongoose.model('course', appSchema)
