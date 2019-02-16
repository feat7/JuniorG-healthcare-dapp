const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonationType = Object.freeze({
    LIV: 'Live',
    CAD: 'Cadever',
    REL: 'Relative',
});

const Organs = Object.freeze({
    KID: 'Kidney',
    HEA: 'Heart',
    EYE: 'Eye',
});

const TransactionSchema = new Schema({
    donor: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    receiver: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    transactionType: {
        type: String,
        enum: Object.values(DonationType),
    },
    hospital: {
        type: Schema.ObjectId,
        ref: 'Hospital',
    },
    organ: {
        type: String,
        enum: Object.values(Organs),
    },
    details: String,
    isLive: Boolean,
    result: Boolean,
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;