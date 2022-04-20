const express = require('express')

const router = express.Router()

// Controller
// import controller function here 
const { addUsers, getUsers, getUser, updateUser } = require('../controllers/user')

// Route
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
// add route here
router.patch('/user/:id', updateUser)

module.exports = router