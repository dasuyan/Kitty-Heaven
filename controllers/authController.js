const CaretakerRepository = require('../repository/sequelize/CaretakerRepository');
const authUtil = require("../utils/authUtils");

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    CaretakerRepository.findByEmail(email)
        .then(caretaker => {
            if (!caretaker) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            } else if (authUtil.comparePasswords(password, caretaker.password) === true) {
                req.session.loggedUser = caretaker;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });
}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}