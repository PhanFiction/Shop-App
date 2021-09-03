const router = require('express').Router();
const cartController = require('../controllers/cart.js');

router.post('/', cartController.handleItemsInCart);
router.post('/checkout', cartController.purchaseItems);
router.get('/', cartController.displayCartItems);


module.exports = router;