const express = require('express');
const router = express.Router();

// Importing route modules
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoute');
const homeController = require('../controllers/homeController');
const companyRoutes = require('./companyRoute');

// Import Passport for user authentication
const passport = require('passport');

// Define routes
router.get('/', passport.checkAuthentication, homeController.homePage);
// ^^^ This route requires authentication using Passport's checkAuthentication middleware.

router.use('/users', userRoutes);
router.use('/students', studentRoutes);
router.use('/company', companyRoutes);

module.exports = router;
