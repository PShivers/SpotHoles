const express = require('express');
const router = express.Router();
const potholesController = require('../controllers/potholesController.js');

router.get('/potholes', potholesController.index);
router.post('/potholes', potholesController.create);

router.get('/potholes/:id', potholesController.show);
router.put('/potholes/:id', potholesController.update);
router.delete('/potholes/:id', potholesController.delete);

module.exports = router;
