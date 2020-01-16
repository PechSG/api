const router = require('express').Router();
let User = require('../../models/user.model');
const ensureLoggedIn = require('./auth')
const bcrypt = require('bcryptjs');

router.get('/islogined', ensureLoggedIn, (req, res)=> {
  res.json({msg: "authorized", status: "ok"})
});

router.get('/users/all', ensureLoggedIn, (req, res) => {
    console.log(req.session);
      User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    // get value from post body
    const { first, last, phoneNumber, password, passwordConf,  birthDate, sex, profilePicUrl, streetNum, village, commune, district, province } = req.body;
    console.log("hello")
    if (!phoneNumber || !password || !passwordConf  || !first || !last) {
        return res.status(400).json({msg: "Please enter required fields!"})
    }
    
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);
      }


    User.findOne({ phoneNumber })
        .then(user => {
        if (user) return res.status(400).json({msg: "This Phone Number is already exist"});

        const newUser = new User({profile: {name: {first, last}, birthDate, sex, profilePicUrl, address: {streetNum, village, commune, district, province}}, phoneNumber, password});
        
        newUser.save()
            .then((user) => {
                req.session.userId = user._id; 
                res.json({
                user: {
                    id: user._id,
                    profile: user.profile,
                    phoneNumber: user.phoneNumber,
                    village: user.village,
                    commune: user.commune,
                    district: user.district,
                    province: user.province,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            })}).catch(err => res.status(400).json('Error: ' + err));
    });
});

// login
router.post('/login', (req, res) => {
    const { phoneNumber, password } = req.body;
    
    if (!phoneNumber || !password) {
        return res.status(400).json({msg: "Phone Number or Password is required"});
    } else {
        User.authenticate(phoneNumber, password, function (error, user) {
            if (error || !user) {
              var err = new Error('Wrong phonenumber or password.');
              err.status = 401;
              err.msg = 'Wrong phonenumber or password.'
              return res.send(err);
            } else {
              req.session.userId = user._id;
              return res.send("yay")
            }
          });
    }
});

// GET for logout logout
router.get('/logout', function (req, res) {
    if (req.session) {
      // delete session object
      console.log("Hi I'm here")
      req.session.destroy(function (err) {
        if (err) {
          return res.send(err);
        } else {
          return res.send({msg: "Log out sucessfully"});
        }
      });
    }
  });



module.exports = router;