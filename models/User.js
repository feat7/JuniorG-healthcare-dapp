const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BloodGroups = Object.freeze({
    A: 'a',
    B: 'b',
    AB: 'ab',
    O: 'o',
});

const RhFactor = Object.freeze({
    POS: '+ve',
    NEG: '-ve',
});

const UserTypes = Object.freeze({
    DOC: 'Doctor',
    REC: 'Receiver',
    DON: 'Donar',
});

const UserSchema = new Schema({
    fullName: String,
    dob: String,
    email: String,
    password: String,
    bloodGroup: {
        type: String,
        enum: Object.values(BloodGroups),
    },
    rhFactor: {
        type: String,
        enum: Object.values(RhFactor),
    },
    place: String,
    userType: {
        type: String,
        enum: Object.values(UserTypes)
    },
    ethAddress: String,
},{
    timestamps: {
        createdAt: 'created_at',
        modifiedAt: 'modified_at'
    }
});

const User = mongoose.model('User', UserSchema );

export default User;