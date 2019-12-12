const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    profile: {
        name: {
            last: {
                type: String,
                required: true,
                trim: true,
                minlength: 3
            },
            first: {
                type: String,
                required: true,
                trim: true,
                minlength: 3
            }
        },
        sex: {
            type: String,
            trim: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        birthDate: {
            type: Date
        },
        profilePicUrl: {
            type: String
        },
        address: {
            houseNumber: {
                type: String
            },
            streetNumber: {
                type: Number
            },
            village: {
                type: String
            },
            commune: {
                type: String
            },
            district: {
                type: String
            },
            province: {
                type: String
            }
        }
    },
    verified: Boolean,
    verifiedAt: Date,
    userType: {
        type: String,
        required: true,
        default: "normal" // other user type is superadmin
    },
    income: {
        type: Number
    }
    
}, {
    timestamps: true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;