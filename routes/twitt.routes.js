const {Router} = require('express')
const router = Router()
const {twittController} = require('../controllers/twits.controller')

router.post('/twitts',twittController.addTwitt)
router.patch('/twitts/:id',twittController.addlike)


module.exports = router