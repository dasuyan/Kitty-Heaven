const Cat = require('../../model/sequelize/Cat');
const Caretaker = require('../../model/sequelize/Caretaker');
const Care = require('../../model/sequelize/Care');
const authUtil = require('../../utils/authUtils')
const authUtils = require("../../utils/authUtils");

exports.getCaretakers = () => {
    return Caretaker.findAll();
}

exports.getCaretakerById = (caretakerId) => {
    return Caretaker.findByPk(caretakerId,
        {
            include: [{
                model: Care,
                as: 'cares',
                include: [{
                    model: Cat,
                    as: 'cat'
                }]
            }]
        });
};

exports.createCaretaker = (newCaretakerData) => {
    return Caretaker.create({
        name: newCaretakerData.name,
        surname: newCaretakerData.surname,
        email: newCaretakerData.email,
        primaryRole: newCaretakerData.primaryRole,
        password: authUtil.hashPassword(newCaretakerData.password)
    });
};

exports.updateCaretaker = (caretakerId, caretakerData) => {
    const unhashed = caretakerData.password;
    caretakerData.password = authUtil.hashPassword(unhashed)

    return Caretaker.update(caretakerData, {where: {_id: caretakerId}});
};

exports.deleteCaretaker = (caretakerId) => {
    return Caretaker.destroy({
        where: {_id: caretakerId}
    });
}

exports.findByEmail = (email) => {
    return Caretaker.findOne({
        where: {email: email}
    });
}