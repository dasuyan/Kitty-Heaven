const Sequelize = require('sequelize');

const Treatment = require('../../model/sequelize/Treatment');
const Caretaker = require('../../model/sequelize/Caretaker');
const Specialization = require('../../model/sequelize/Specialization');
const {matchLoggedCaretaker} = require("../../utils/authUtils");

exports.getSpecializations = () => {
    return Specialization.findAll({include: [
            {
                model: Treatment,
                as: 'treatment'
            },
            {
                model: Caretaker,
                as: 'caretaker'
            }]
    });
};



exports.getSpecializationById = (specializationId) => {
    return Specialization.findByPk(specializationId, {include: [
            {
                model: Treatment,
                as: 'treatment'
            },
            {
                model: Caretaker,
                as: 'caretaker'
            }]
    });
};


exports.createSpecialization = (specializationData) => {
    console.log(JSON.stringify(specializationData));

    return Specialization.create({
        treatment_id: specializationData.treatment_id,
        caretaker_id: specializationData.caretaker_id,
        certificate: specializationData.certificate,
        certificationYear: specializationData.certificationYear
    });
};

exports.updateSpecialization = (specializationId, specializationData) => {
    return Specialization.update(specializationData, {where: {_id: specializationId}});
};

exports.deleteSpecialization = (specializationId) => {
    return Specialization.destroy( {
        where: {_id: specializationId}
    });
};

exports.deleteManySpecializations = (specializationIds) => {
    return Specialization.find({_id: {[Sequelize.Op.in]: specializationIds}});
};