// External Dependancies
const mongoose = require('mongoose')

const artisanLicenseSchema = new mongoose.Schema({
    _id: String,
    licenseTitle: String,
    license: String,
    awardingBody: String,
    yearIssue: String,
    recordDate: String,
    
})

module.exports = mongoose.model('ArtisanLicense', artisanLicenseSchema)