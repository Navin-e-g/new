var mdb = require('mongoose')
var dataSchema = mdb.Schema({
    movie: String,
    rating: Number,
    boxOffice: String,
})
var data_schema = mdb.model("datas", dataSchema)
module.exports = data_schema