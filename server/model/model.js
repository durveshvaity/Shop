const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    categoryid : {
        type: String,
        required: true,
        // unique: true
    },
    categoryname : {
        type: String,
        required: true,
        // unique: true
    },
    // gender : String,
    // status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;