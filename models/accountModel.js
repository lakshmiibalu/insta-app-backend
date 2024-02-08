const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema(
    {
        name:String,
        username:String,
        password:String,
        profilepic:String,
        caption:String

    }
)

module.exports = mongoose.model("account",accountSchema)