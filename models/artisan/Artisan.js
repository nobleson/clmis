// External Dependancies
const mongoose = require('mongoose')

const artisanSchema = new mongoose.Schema({
    _id: String,
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    dateOfBirth: String,
    disabilityType: String,
    phoneNumber: String,
    emailAddress: String,
    contactAddress: String,
    cityOfResidence: String,
    stateOfResidence: String,
    centerOfGraduation: String,
    trade: String,
    uniqueLearnersNumber: String,
    competencyLevel: String,
    stateOrigin: String,
    localGovernmentOrigin: String,
    nationality: String,
    registrationStatus: String,
    licensStatus: String,
    photo:String,
    dateRegistered: String
})

module.exports = mongoose.model('Artisan', artisanSchema)