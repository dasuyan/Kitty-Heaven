const express = require('express');
const router = express.Router();
const careController = require('../controllers/careController');

router.get('/', careController.showCareList);
router.get('/add', careController.showAddCareForm);
router.get('/edit/:careId', careController.showEditCareForm);
router.get('/details/:careId', careController.showCareDetails);

router.post('/add', careController.addCare);
router.post('/edit', careController.updateCare);
router.get('/delete/:careId', careController.deleteCare);

module.exports = router;