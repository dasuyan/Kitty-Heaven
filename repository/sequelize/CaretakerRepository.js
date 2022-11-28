const Cat = require('../../model/sequelize/Cat');
const Caretaker = require('../../model/sequelize/Caretaker');
const Care = require('../../model/sequelize/Care');

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
        primaryRole: newCaretakerData.primaryRole
    });
};

exports.updateCaretaker = (caretakerId, caretakerData) => {
    const name = caretakerData.name;
    const surname = caretakerData.surname;
    const email = caretakerData.email;
    const primaryRole = caretakerData.primaryRole;

    return Caretaker.update(caretakerData, {where: {_id: caretakerId}});
};

exports.deleteCaretaker = (caretakerId) => {
    return Caretaker.destroy({
        where: {_id: caretakerId}
    });
}