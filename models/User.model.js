const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: String,
  userSaves: [
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Twitt"
      }
  ],
});


const User = mongoose.model("User",userSchema)
module.exports = User 