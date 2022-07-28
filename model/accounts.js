const mongoose = require("mongoose");
const personalDetails = require("./PersonalDetails");
const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
  AssociatedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: personalDetails,
    unique: true,
  },
  validationID: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
  },
  simCount: {
    type: Array,
    default: [],
  },
  totalTicketsSold: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("userAllocation", UserSchema);
