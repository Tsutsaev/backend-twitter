const User = require('../models/User.model')

module.exports.usersController = {
    addUser: async (req,res) => {
        try {
            const addUser = await User.create({
                userName: req.body.userName
            })
            res.json(addUser)
        } catch(err) {
            res.json(err)
        }
    },
    userSave: async (req, res) => {
            const userSave = await User.findByIdAndUpdate(req.params.id, {
                $push:{userSaves:req.body.userSaves}
            })
            res.json('twitt save')

        } 
    
     
}