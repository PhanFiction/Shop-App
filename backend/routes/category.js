const router = require('express').Router();
const categoryController = require('../controllers/category.js');

router.get('/breakfast', categoryController.getBreakfast);
router.get('/lunch', categoryController.getLunch);
router.get('/dinner', categoryController.getDinner);
router.get('/dessert', categoryController.getDessert);
router.get('/drinks', categoryController.getDrinks);

router.get('/breakfast/:id', categoryController.getFood);
router.get('/lunch/:id',  categoryController.getFood);
router.get('/dinner/:id',  categoryController.getFood);
router.get('/dessert/:id', categoryController.getFood);
router.get('/drinks/:id',  categoryController.getFood);

module.exports = router;