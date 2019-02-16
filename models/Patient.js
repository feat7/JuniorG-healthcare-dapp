const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from './User';

const PatientSchema = new Schema({
    user: {
        type: Schema.Types.objectId,
        ref: 'User',
        index: true,
    },
    details: {},
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;