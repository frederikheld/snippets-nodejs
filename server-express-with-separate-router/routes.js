const express = require('express')
const actions = require('./actions')

const router = express.Router()

router.route('/').get(actions.default)
router.route('/helloWorld').get(actions.helloWorld)
router.route('/hello/:name').get(actions.hello)

module.exports = router