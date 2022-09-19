const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  rollno: { type: "string", required: true },
  name: { type: "string", required: true },
  semter: { type: Array, required: true }

});

Schema.index({ rollno: 1 }, { unique: true });

const students = mongoose.model("students", Schema);

module.exports = students;