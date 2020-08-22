const mongoose = require('mongoose') 
// stack schema
const appSchema = mongoose.Schema({
    name: { type: String },
    in: { type: String },
    adding: { type: String },
    tools: String , 
})

module.exports =  mongoose.model('stack', appSchema)
