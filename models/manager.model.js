const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    managerName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    block_manager:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"block",
        required:true,
    }
},
{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("manager", managerSchema);