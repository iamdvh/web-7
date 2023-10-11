var mongoose = require("mongoose");
var StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name canot Empty"],
  },
  dob: Date,
  gpa: {
    type: Number,
    min: [0, "GPA can not be nagative"],
    max: 10,
  },
  image: String,
  gender: String,
});

var StudentModel = mongoose.model("Student", StudentSchema, "Student");
module.exports = StudentModel;
