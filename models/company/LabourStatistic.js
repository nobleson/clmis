// External Dependancies
const mongoose = require('mongoose')

const labourStatisticSchema = new mongoose.Schema({
    _id: String, //company id
    labourstatistics: [Object] //company labourstatistics
})
/* const labourStatisticSchema = new mongoose.Schema({

    totalNumberArtisan: String,
    totalCertifiedArtisan: String,
    totalLicensedArtisan: String,
    wageRateMonthly: String,
    contractStaff: String,
    fullyEmployedStaff: String,
    month: String,
    companyId: String

}) */

module.exports = mongoose.model('LabourStatitstics', labourStatisticSchema)