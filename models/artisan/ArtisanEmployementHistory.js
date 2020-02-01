// External Dependancies
const mongoose = require('mongoose')

const artisanEmployementHistory = new mongoose.Schema({
    _id: String,
    trade: String,
    yearsPractice: String,
    workExpirience: [String],
    engagedOnProject: String,
    addressOfProjectSite: String,
    employmentStatus: String,
    recordDate: String
})

module.exports = mongoose.model('ArtisanEmployement', artisanEmployementHistory)

