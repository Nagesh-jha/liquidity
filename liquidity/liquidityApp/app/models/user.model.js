"use strict";

const mongoose = require("mongoose");
const validator = require("validator");
var Schema = mongoose.Schema;


var userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      validate: [validator.isEmail, "Invalid email"]
    },
    password: {
      type: String,
      required: true,
      default: "Admin"
    }
  },
  {
    //timestamps: true
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false
  }
);

module.exports = mongoose.model("User", userSchema);
