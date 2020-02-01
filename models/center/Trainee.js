const mongoose = require('mongoose')

const traineeSchema = new mongoose.Schema({
    _id: String,
    traineeList: [Object]
})

module.exports = mongoose.model('Trainee', traineeSchema) 