// External Dependancies
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    _id: String,
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
    companyType: String,
    companyState: String,
    logo: String,
    dateRegistered: String
    
})

module.exports = mongoose.model('Companys', companySchema)