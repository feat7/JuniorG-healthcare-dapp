const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from './User';

// Locality for GeoLocation
const HospitalSchema = new Schema({
    name: String,
    address: String,
    locality: String,
    district: String,
    pin: Number,
    location: String,
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
},{
    createdAt: 'created_at',
    modifiedAt: 'modified_at'
});

const Hospital = mongoose.model('Hospital', HospitalSchema);

export default Hospital;