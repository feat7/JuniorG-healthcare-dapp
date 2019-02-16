const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const User =require('./User');

const PatientSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        index: true,
    },
    details: {},
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;