const mongoose = require('mongoose')

const apprenticeSchema = new mongoose.Schema({
    _id: String, //Center Id
    apprenticeList: [Object]
/*     firstName: String,
    middleName: String,
    lastName: String,
    residentialAddress: String,
    residetialLgArea: String,
    stateOfResidence: String,
    dateOfBirth: String,
    phoneNumber: String,
    alternativePhoneNumber: String,
    emailAddress: String,
    bankName: String,
    accountNumber: String,
    bvnNumber: String,
    centerName: String,
    centerAddress: String,
    lgArea: String,
    state: String,
    trade: String,
    disabilityType: String,
    dateRegistered: String */
    
})

module.exports = mongoose.model('Apprentice', apprenticeSchema)