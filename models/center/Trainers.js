const mongoose = require('mongoose')

const trainersSchema = new mongoose.Schema({
    _id: String,
    trainerList: [Object]
})

module.exports = mongoose.model('Trainers', trainersSchema)