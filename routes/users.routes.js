const {Router} = require('express')
const router = Router()
const {usersController} = require('../controllers/users.controller')

router.post('/users', usersController.addUser)
router.patch('/users/:id', usersController.userSave)



module.exports = router