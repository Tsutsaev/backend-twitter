const mongoose = require("mongoose");
const twittSchema = mongoose.Schema({
  twittTitle: String,
  twittText: String,
  userTwitt: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  userLikes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User"
    },
  ],
});
const Twitt = mongoose.model('Twitt',twittSchema)
module.exports = Twitt