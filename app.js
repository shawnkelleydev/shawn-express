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
  const project = data.music[id];
  res.locals.title = project.title;
  res.locals.instrum = project.instrumentation;
  res.locals.duration = project.duration;
  res.locals.description = project.description;
  res.locals.video = project.video_link;
  res.render("piece");
});

//server
const route = 3000;
app.listen(route, () => {
  console.log(`The application is running on localhost:${route}.`);
});
