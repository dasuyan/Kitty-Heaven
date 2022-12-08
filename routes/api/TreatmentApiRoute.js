const express = require('express');
const router = express.Router();

const treatmentApiController = require('../../api/TreatmentAPI');

router.get('/', treatmentApiController.getTreatments);
router.get('/:treatmentId', treatmentApiController.getTreatmentById);
router.post('/', treatmentApiController.createTreatment);
router.put('/:treatmentId', treatmentApiController.updateTreatment);
router.delete('/:treatmentId', treatmentApiController.deleteTreatment);
//router.delete('/', treatmentApiController.deleteManyTreatments);

module.exports = router;