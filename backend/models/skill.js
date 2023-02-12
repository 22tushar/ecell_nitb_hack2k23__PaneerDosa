const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema(
  {
    skill1: { type: String },
    skill2: { type: String },
    skill3: { type: String},
    skill4: { type: String},
  },
);

const Skill = mongoose.model("Skill", skillsSchema);

exports.Skill = Skill;
