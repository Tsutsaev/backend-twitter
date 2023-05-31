const Twitt = require('../models/Twitt.model')
module.exports.twittController = {
    addTwitt: async(req,res) => {
        try{
            const addTwitt = await Twitt.create({
                twittTitle: req.body.twittTitle,
                twittText: req.body.twittText,
                userTwitt:req.body.userTwitt,
                
            }); res.json(addTwitt)
        } catch(err) {
            res.json(err)
        }
    } ,
    addlike: async (req, res) => {
        try {
            const addlike = await Twitt.findByIdAndUpdate(
                 req.params.id,
                { $push:{userLikes:req.body.userLikes}}
            );
            res.json(addlike)
        } catch (err) {
            res.json(err)
        }
    },
    
}