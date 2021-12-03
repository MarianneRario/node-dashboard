const mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    // _id: {
    //   type: Number,
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    url: {
      type: String,
      default: "",
    },
    udid: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

const UserDB = mongoose.model("test_db", schema);

module.exports = UserDB;
