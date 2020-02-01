// External Dependancies
const mongoose = require('mongoose')

const SkillAssesorSchema = new mongoose.Schema({
    regNumber: String,
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    phoneNumber: String,
    emailAddress: String,
    contactAddress: String,
    iqamTitle: String,   
    stateOfOrigin: String,
    localGovernmentOfOrigin: String,
    nationality: String,
    stateOfResidence: String,
    photo: String,
    dateRegistered: String
})

module.exports = mongoose.model('SkillAssesor', SkillAssesorSchema)