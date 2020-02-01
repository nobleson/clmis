// External Dependancies
const mongoose = require('mongoose')

const jobAdvertSchema = new mongoose.Schema({
    _id: String, //company id 
    jobadvert: [Object] //company adverts
})

module.exports = mongoose.model('Advert', jobAdvertSchema) 