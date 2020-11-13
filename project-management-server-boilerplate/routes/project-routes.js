const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Project = require("../models/project");
const Task = require("../models/task");

// GET route => to get all the projects
router.get('/projects', (req, res, next) => {
    //  1ro - utilizamos la referencia a nuestro modelo de projects;
    //  2do - usamos el método find() para recuperar TODOS los projects y populamos el campo 'tasks'
    //  3ro - utilizamos una promesa de Javascript (o async/await) para obtener una respuesta de nuestra BDD y la recuperamos como un objecto json.

    Project.find().populate('tasks')
    .then(allTheProjects => {
        res.json(allTheProjects);
    })
    //  4to - atrapamos, si los hay, los errores con un catch en forma de json.
    .catch(err => {
        res.json(err)
    })
});

// POST route => to create a new project
router.post('/projects', (req,res,next) => {
    Project.create({
        title: req.body.title,
        description: req.body.description,
        task: []
    })
    .then(response => {
        res.json(response);
    }

    )
    .catch(err => {
        res.json(err);
    })
});

// GET route => to get a specific project/detailed view
router.get('/projects/:id', (req,res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }
      Project.findById(req.params.id).populate('tasks')
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })  
});

// PUT route => to update a specific project
router.put('/projects/:id', (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.json({message: `Project with ${req.params.id} is updated successfully.`})
    })
    .catch(err => {
        res.json(err)
    })
});

// DELETE route => to delete a specific project
router.delete('/projects/:id', (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Project.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json({message: `Project with ${req.params.id} is removed successfully.`})
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;
