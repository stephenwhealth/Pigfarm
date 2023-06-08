const mongoose = require("mongoose")
const pigSchema = new mongoose.Schema({
     bread:{
        type: String,
        required:[true,"bread is required"]
     },
     colour:{
        type: String,
        required:[true, "colour is required"]
     },
     name:{
        type: String,
     },
     weight:{
        type: String
        },
     age:{
        type: Number
     },
     isMatured:{
        type: Boolean,
     },
     Soled:{
        type: Boolean
     }
},{timestamps: true}
)

const pigModel = mongoose.model("pigfarm Api", pigSchema)

module.exports= pigModel