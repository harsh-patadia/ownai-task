var express = require('express');
const userRouter = require('./userRoutes');
const adminRouter = require('./adminRoutes');
const { countryDropdown, cityDropdown } = require('../src/controller/dropdownController');
var router = express.Router();

/*all the route points here. */
router.use('/user', userRouter);
router.use('/admin', adminRouter);
router.get('/public/country/dropdown', countryDropdown);
router.get('/public/city/dropdown/:countryId', cityDropdown);

module.exports = router;
