var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var studentRouter = require("./routes/student");

var app = express();

var hbs = require("hbs");
hbs.registerHelper("equal", require("handlebars-helper-equal"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var hbs = require("hbs");
hbs.registerHelper("dateFormat", require("handlebars-dateformat"));
var mongoose = require("mongoose");
var uri = "mongodb+srv://iamdvh03:mavryk@cluster0.uwvfftt.mongodb.net/gch1105";
mongoose
  .connect(uri)
  .then(() => console.log("Succeeded to connect"))
  .catch((err) => console.log("Failed to connect"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/student", studentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//cau hinh port cua server de day len cloud
app.listen(process.env.PORT || 3001);
module.exports = app;
