const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const User = require('./User');

// Locality for GeoLocation
const HospitalSchema = new Schema({
    name: String,
    address: String,
    locality: String,
    district: String,
    pin: Number,
    location: String,
    admin: {
        type: Schema.ObjectId,
        ref: 'User',
        index: true,
    },
},{
    createdAt: 'created_at',
    modifiedAt: 'modified_at'
});

const Hospital = mongoose.model('Hospital', HospitalSchema);

module.exports = Hospital;