const bcrypt = require('bcryptjs');
const session = require("express-session");

const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (passPlain) => {
    const passHashed = bcrypt.hashSync(passPlain, salt);
    return passHashed;
}

exports.comparePasswords = (passPlain, passHash) => {
    const res = bcrypt.compareSync(passPlain, passHash);
    return res;
}

exports.permitAuthenticatedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    if (loggedUser) {
        next();
    } else {
        throw new Error('unauthorized access');
    }
}

exports.matchLoggedCaretaker = (req, res, next) => {
    console.log(req.session.loggedUser)
    return req.session.loggedUser;
}

