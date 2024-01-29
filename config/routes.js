const express = require('express')
const router = express.Router()

//controllers
const pages = new (require('../app/controllers/pages'))()

router.get('/',pages.welcome)

module.exports = router