const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role:{type:String},
    name:{type:String},
    desc:{type:String},
    email:{type:String},
    password:{type:String},
    reqSent: { type: Boolean, default: false },
    reqAccept: { type: Boolean, default: false },
    C: { type: Boolean, default: false },
    T: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

exports.User = User;
