var express = require('express');
var router = express.Router();
const Project = require('./../models/Project');
const User = require('./../models/User');


router.get('/getAllProjects', (req, res) => {
  Project.find().populate('owner members').exec((err, projects) => {
    res.json({
      projects: projects
    })
  });
});

router.post('/getProjectById', (req, res) => {
  var id = req.body.id;
  Project.findById(id).populate('owner members').exec((err, project) => {
    if(err) console.error(err);
    res.json({
      project: project
    });
  });
});

router.post('/postCreateProject', (req, res) => {
  console.log(req.body);
  var owner = mongoose.Types.ObjectId(req.body.owner);
  var members = req.body.members.map((member) => {
    return mongoose.Types.ObjectId(member.value);
  })
  var project = new Project({
    name: req.body.projectName,
    description: req.body.description,
    owner:  owner,
    members: members

  });
  project.save((err) => {
    if(err) console.error("Error while saving a project", err);
    res.sendStatus(200);
  });
});

router.get('/project/:id', (req, res) => {
  res.render('index');
});

module.exports = router;