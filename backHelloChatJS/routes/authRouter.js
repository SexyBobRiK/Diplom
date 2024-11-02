const Router = require('express')
const controller = require('../controller/authController');

const router = Router();

router.post('/registrations', controller.userRegistrations)
router.post('/sign-in', controller.userSignedIn)

module.exports = router;