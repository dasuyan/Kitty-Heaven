const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.get('/', catController.showCatList);
router.get('/add', catController.showAddCatForm);
router.get('/edit/:catId', catController.showEditCatForm);
router.get('/details/:catId', catController.showCatDetails);

router.post('/add', catController.addCat);
router.post('/edit', catController.updateCat);
router.get('/delete/:catId', catController.deleteCat);

module.exports = router;