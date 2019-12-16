const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    
        birthDate: {
            type: String
        },
        profilePicUrl: {
            type: String
        },
        address: {
            houseNum: {
                type: String
            },
            streetNum: {
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
    phoneNumber: {
        type: Number,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verifiedAt: {
        type: Number
    },
    userType: {
        type: String,
        required: true,
        default: "normal" // other user type is superadmin
    },
    income: {
        type: Number
    },
    createdAt: {
        type: Number,
        default: new Date().getTime()
    },
    updatedAt: {
        type: Number,
        default: new Date().getTime()
    }
    
}, {
    timestamps: false,
});

//authenticate input against database
userSchema.statics.authenticate = function (phoneNumber, password, callback) {
    User.findOne({ phoneNumber: phoneNumber })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  }
  
  //hashing a password before saving it to the database
  userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });
    

const User = mongoose.model('User', userSchema);

module.exports = User;