// External Dependancies
const mongoose = require('mongoose')

const artisanNvqCenterSchema = new mongoose.Schema({
_id: String,
centerName: String,
centerNumber: String,
candidateNumber:String,
candidateTrade: String,

})

module.exports = mongoose.model('ArtisanNvqCenter', artisanNvqCenterSchema)