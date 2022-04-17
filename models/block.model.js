const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema(
  {
    block_name: { type: String, required: true, unique: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const Block = mongoose.model("block", blockSchema);
module.exports = Block;
