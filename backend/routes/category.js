const router = require('express').Router();
const categoryController = require('../controllers/category.js');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/');
    },
    filename: function (req, file, cb) {
        if(file.originalname === (null || undefined))
        {
            cb(null, new Date().toISOString())
        }else{
            cb(null, file.originalname);
        }
    }
})

const fileFilter = function (req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    {
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter,
})

router.get('/products', categoryController.getAllItems);
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

router.post('/products', upload.single('productImage'), categoryController.postItem);
router.put('/products/:id', upload.single('productImage'), categoryController.postItem);
router.delete('/products/:id', categoryController.deleteItem);

module.exports = router;