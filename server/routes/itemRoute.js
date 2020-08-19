const router = require('express').Router();
const cors = require('cors');
const item = require('../controllers/itemController');
require('dotenv').config();

router.use(cors());

// Get items
router.get('/items/:page', item.getAll);

// Get five
router.get('/five', item.getFive);

// Get by category
router.get('/:subCategory', item.getBySubCategory);

// Post - increase popularity
router.post('/popularity/:id', item.popularity);

// Add item - ADMIN
router.post('/add', item.add);

// Get popular
// router.get('/popularity', item.getPopular);

// Get by date
// router.get('/date/:time', item.getByDate);

// Get under 10zloty
// router.get('/under10zloty', item.getUnder10zloty);

// Get by price
// router.get('/price', item.getByPrice);




module.exports = router;