const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
    textComment:String,
    commentUser: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }
    // twitt
}) 