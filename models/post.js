const mongoose = require('mongoose') 
// stack schema
const appSchema = mongoose.Schema({
    name: { type: String },
    post: { type: String }, 
})

module.exports =  mongoose.model('post', appSchema)
