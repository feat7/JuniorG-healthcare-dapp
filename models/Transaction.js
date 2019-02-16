const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from './User';
import Hospital from './Hospital';

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
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
    },
    transactionType: {
        type: String,
        enum: DonationType,
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        index: true,
    },
    organ: {
        type: String,
        enum: Organs,
    },
    details: String,
    isLive: Boolean,
    result: Boolean,
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;