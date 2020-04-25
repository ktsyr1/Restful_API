const mongoose = require('mongoose') 
// stack schema
const appSchema = mongoose.Schema({
    id_stack: { type: String } ,
    name_course: { type: String } ,
    in_course: { type: String } ,
    link_course: { type: String }
})

module.exports =  mongoose.model('stack', appSchema)
