const Router = require("express");
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileConroller')

router.post('', authMiddleware, fileController.createDir)

module.exports = router