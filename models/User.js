const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator");
const appSecret = require("../config").appSecret;

const { Schema } = mongoose;
const saltRounds = 10;


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
    DOC: 'Admin',
    REC: 'Receiver',
    DON: 'Donar',
});

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fullName: String,
    dob: String,
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
    status: {
        type: Boolean,
        default: false
    }
},{
    timestamps: {
        createdAt: 'created_at',
        modifiedAt: 'modified_at'
    }
});

UserSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign(
        {
            email: this.email,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10)
        },
        appSecret
    );
};

UserSchema.methods.toAuthJSON = function() {
    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT(),
        userType: this.userType
    };
};

const User = mongoose.model("User", UserSchema);

module.exports = User;