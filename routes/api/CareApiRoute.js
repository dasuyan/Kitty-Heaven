const express = require('express');
const router = express.Router();

const careApiController = require('../../api/CareAPI');

router.get('/', careApiController.getCares);
router.get('/:careId', careApiController.getCareById);
router.post('/', careApiController.createCare);
router.put('/:careId', careApiController.updateCare);
router.delete('/:careId', careApiController.deleteCare);
//router.delete('/', careApiController.deleteManyCares);

module.exports = router;