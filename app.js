const express = require("express");
const app = express();
const data = require("./projects.json");

//sets up pug
app.set("view engine", "pug");

//serves static files to be read by user's browser
app.use("/static", express.static("public"));

//------------------------------------------------------------------

//index
app.get("/", (req, res) => {
  res.render("index");
  const projectsarr = data.projects;
  res.locals.projects = projectsarr;
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects", (req, res) => {
  res.locals.projects = data.projects;
  res.locals.pieces = data.music;
  res.render("projects");
});

app.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = data.projects[id];
  res.locals.name = project.project_name;
  res.locals.techs = project.technologies;
  res.locals.desc = project.description;
  res.locals.tag = project.tag;
  res.locals.live = project.live_link;
  res.locals.github = project.github_link;
  res.render("project");
});

app.get("/music/:id", (req, res) => {
  const { id } = req.params;
  const piece = data.music[id];
  res.locals.title = piece.title;
  res.locals.instrum = piece.instrumentation;
  res.locals.duration = piece.duration;
  res.locals.description = piece.description;
  res.locals.tag = piece.tag;
  res.locals.video = piece.video_link;
  res.locals.purchase = piece.purchase_link;
  res.locals.audio = piece.audio_link;
  res.locals.img = piece.img;
  res.render("piece");
});

app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.err = err;
  if (err.status === 404) {
    res.render("page-not-found");
    console.log("404 - please try again.");
  } else if (err.status === undefined) {
    res.render("error");
    console.log("Bad things just happened.  Please try again.");
  }
});

//server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
