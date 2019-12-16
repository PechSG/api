const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LoanSchema = new Schema({
    accountId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    loanInterest: {
        type: Number,
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    loanPayment: { //loan with total interest
        type: Number,
        required: true
    },
    loanPaid: [{
        transactionId: {
            type: ObjectId
        },
        amount: Number
    }],
    loanInterestPaid: [{
        transactionId: ObjectId,
        amount: Number
    }],
    loanTerm: { 
        type: String
    },
    loanNumberOfStatement: {
        type: Number
    },
    loanPurpose: {
        type: String,
        required: true
    },
    loanPaymentPlan: {
        type: String, //monthly weekly
        default: "monthly"
    }   
}, {
    timestamps: true,
});

const Loan = mongoose.model('Loan', LoanSchema);

module.exports = Loan;