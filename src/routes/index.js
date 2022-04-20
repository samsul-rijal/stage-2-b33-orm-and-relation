const express = require('express')
const router = express.Router()


const {addUsers} = require('../controllers/user')


router.post('/user', addUsers)


module.exports = router