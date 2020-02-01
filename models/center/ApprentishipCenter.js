const mongoose = require('mongoose')

const apprentishipCenterSchema = new mongoose.Schema({
    aprCenterName: String,
    phoneNumber: String,
    contactAddress: String,
    lgArea: String,
    state: String,
    trade: String,
    dateRegistered: String
})

module.exports = mongoose.model('ApprentishipCenter', apprentishipCenterSchema)