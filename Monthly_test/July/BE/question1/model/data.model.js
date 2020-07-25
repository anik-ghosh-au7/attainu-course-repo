const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: String,
    email: String,
    phone_number: Number,
    age: Number,
    gender: String,
    address: String
},
    {
    versionKey: false
});

module.exports = mongoose.model('data', dataSchema, 'data_list');