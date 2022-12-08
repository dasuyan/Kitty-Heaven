const Treatment = require('../../model/sequelize/Treatment');
const Caretaker = require('../../model/sequelize/Caretaker');
const Specialization = require('../../model/sequelize/Specialization');

exports.getTreatments = () => {
    return Treatment.findAll();
}

exports.getTreatmentById = (treatmentId) => {
    return Treatment.findByPk(treatmentId,
        {
            include: [{
                model: Specialization,
                as: 'specializations',
                include: [{
                    model: Caretaker,
                    as: 'caretaker'
                }]
            }]
        });
};

exports.createTreatment = (newTreatmentData) => {
    return Treatment.create({
        name: newTreatmentData.name,
        cost: newTreatmentData.cost,
        contraindications: newTreatmentData.contraindications
    });
};

exports.updateTreatment = (treatmentId, treatmentData) => {

    return Treatment.update(treatmentData, {where: {_id: treatmentId}});
};

exports.deleteTreatment = (treatmentId) => {
    return Treatment.destroy({
        where: {_id: treatmentId}
    });
}