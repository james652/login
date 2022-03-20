//모듈
const express = require("express");
const app = express();



//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views","./views");
app.set("view engine", "ejs");  //view engine

app.use("/", home); //미들 웨어를 등록해주는

module.exports = app;