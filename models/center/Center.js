// External Dependancies
const mongoose = require('mongoose')

const centerSchema = new mongoose.Schema({
    _id: String,
    fullLegalName: String,
    acronym: String,
    nationality: String,
    legalLatatus: String,
    officialAddress: String,
    postalAddress: String,
    telephone: String,
    email: String,
    website: String,
    logo: String,
    contactPersonsNumber: String,
    contactPersonsEmail: String,
    dateFounded: String,
    primaryCtivities: {
        type: Map,
        of: String
      },
    noPermanentTrainer: String,
    noAdjunctTrainers: String,
    noAdminStaff: String,
    localGovernment: String,
    state: String,
    dateRegistered: String
})

module.exports = mongoose.model('TrainingProvider', centerSchema)