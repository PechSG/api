const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    accountId: {
        type: ObjectId,
        required: true
    },
    groupId: {
        type: ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    code: {
        type: String, // deposit, withdraw, takeout loan, payback loan, interest pay, interest gain
        trim: true,
        required: true
    },
    method: {
        type: String, //cash bank 
        trim: true,
        required: true
    },
    approved: { 
        type: Boolean,
        required: true,
        default: false
    },
    approvedAt: {
        type: Date
    },
    approvedByUserId: {
        type: ObjectId
    },
    currency: {
        type: String
    }
}, {
    timestamps: true,
});


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;