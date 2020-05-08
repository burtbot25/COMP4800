const express = require('express');
const router = express.Router();
const startController = require('../controllers/start-controller');
const mainMenuController = require('../controllers/main-menu-controller');
const basicNavController = require('../controllers/basic-nav-controller');
const academicBuildingsController = require('../controllers/academic-buildings-controller');
const servicesSupportsController = require('../controllers/services-supports-controller');
const otherKeyPlacesController = require('../controllers/other-key-places-controller');
const finishController = require('../controllers/finish-controller');

router.get('/', startController.getMap);
router.get('/main_menu', mainMenuController.mainMenu);
router.get('/basic_nav', basicNavController.getMap);
router.get('/academic_buildings', academicBuildingsController.getMap);
router.get('/services_supports', servicesSupportsController.getMap);
router.get('/other_key_places', otherKeyPlacesController.getMap);
router.get('/finish', finishController.getMap);

router.get('/getTransit', basicNavController.getTransit);
router.get('/getTransitDesc', basicNavController.getTransitDesc)

module.exports = router;