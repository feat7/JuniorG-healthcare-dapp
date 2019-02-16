const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from './User';

const PatientSchema = new Schema({
    user: {
        type: Schema.Types.objectId,
        ref: 'User',
    },
    details: {},
});

const Patient = mongoose.model('Patient', PatientSchema);
export default Patient;