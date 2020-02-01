// External Dependancies
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName: String,
    companyAcronym: String,
    companyNationality: String,
    companyStatus: String,
    companyWebsite: String,
    companyAddress: String,
    companyTelephone: String,
    companyEmail: String,
    companyCAC: String,
    companyFounded: String,
    companyActivities: String,
    companyLocalGovernment: String,
    companyState: String,
    dateApplied: String
})

module.exports = mongoose.model('CompanyApplication', companySchema)