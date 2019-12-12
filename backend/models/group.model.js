const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    createdByUserId: {
        type: ObjectId,
        trim: true,
        required: true
    },
    admins: {
        type: Array
    },
    members: [{
        userId: ObjectId,
        accountId: ObjectId,
        name: {
            first: String,
            last: String
        },
        joinedAt: {
            type: Date
        },
        savingPlan: {
            type: String,
            required: true,
            default: "monthly" // possibly different type of member
        }
    }],
    savingBalance: {
        type: Number,
        required: true,
        default: 0
    },
    loanBalance: {
        type: Number,
        required: true
    },
    totalBalance:{
        type: Number,
        required: true,
        default: 0
    },
    currentBalance: {
        type: Number
    },
    maxDeposit: {
        type: Number
    },
    minDeposit: {
        type: Number
    },
    minWithdraw: {
        type: Number
    },
    maxWithdraw: {
        type: Number
    },
    minLoan: {
        type: Number
    },
    maxLoan: {
        type: Number
    },
    maxNumberOfMember: {
        type: Number
    },
    numberOfLoan: {
        type: Number
    },
    loans: {
        type: Array
    }
}, {
    timestamps: true,
});


const Group = mongoose.model('Group', groupSchema);

module.exports = Group;