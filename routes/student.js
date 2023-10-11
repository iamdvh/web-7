var express = require("express");
var StudentModel = require("../models/StudentModel");
var router = express.Router();

router.get("/", async (req, res) => {
  var student = await StudentModel.find();
  //   res.send(student);
  res.render("student/index", { students: student });
});
router.get("/detail/:id", async (req, res) => {
  var id = req.params.id;
  var student = await StudentModel.findById(id);
  res.render("student/detail", { student: student });
});

router.get("/delete/:id", async (req, res) => {
  var id = req.params.id;
  await StudentModel.findByIdAndDelete(id);
  console.log("Delete student successfully");
  res.redirect("/student");
});
router.get("/add", (req, res) => {
  res.render("student/add");
});
router.post("/add", async (req, res) => {
  var student = req.body;
  await StudentModel.create(student);
  console.log("Student created successfully");
  res.redirect("/student");
});
router.get("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var student = await StudentModel.findById(id);
  res.render("student/edit", { student: student });
});
router.post("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var student = req.body;
  await StudentModel.findByIdAndUpdate(id, student);
  console.log("Student updated successfully");
  res.redirect("/student");
});
module.exports = router;
