const express = require('express');
const router = express.Router();

const specializationApiController = require('../../api/SpecializationAPI');

router.get('/', specializationApiController.getSpecializations);
router.get('/:specializationId', specializationApiController.getSpecializationById);
router.post('/', specializationApiController.createSpecialization);
router.put('/:specializationId', specializationApiController.updateSpecialization);
router.delete('/:specializationId', specializationApiController.deleteSpecialization);
//router.delete('/', specializationApiController.deleteManySpecializations);

module.exports = router;