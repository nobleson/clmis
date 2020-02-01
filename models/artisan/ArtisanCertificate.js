// External Dependancies
const mongoose = require('mongoose')

const artisanCertificateSchema = new mongoose.Schema({
    _id: String,
    certificateTitle: String,
    certificate: String,
    awardingBody: String,
    yearIssued: String,
    recordDate: String
    
})

module.exports = mongoose.model('ArtisanCertificate', artisanCertificateSchema)