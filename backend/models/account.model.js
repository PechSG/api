const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    groupId: {
        type: ObjectId,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    accountType: {
        type: String
    }
}, {
    timestamps: true,

});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;