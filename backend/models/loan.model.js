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
    loanPlan: {
        type: String,
        required: true
    },
    loanPayment: {
        type: Number,
        required: true
    },
    loanPaid: [{
        transactionId: {
            type: ObjectId,
            amount: Number
        }
    }],
    loanTerm: {
        type: String
    },
    
    
}, {
    timestamps: true,

});

const Loan = mongoose.model('Loan', LoanSchema);

module.exports = Loan;