let User = require('../../models/user.model');

// This is a middle to check if the user is authorized and logined
module.exports = function(req, res, next) {

    User.findById(req.session.userId).exec(function (error, user) {
        if (error) {
            return next(error);
        } else {      
            if (user === null) {     
                res.status(401).send({ msg: "Unauthorized" });
            } else {
                return next();
            }
        }
    });
}