const router = require('express').Router()
let TechTask = require('../models/tech-task.model')

//1 API-EP for getting list of all users
router.route('/').get((request, response) => {
    
    TechTask.find()
        .then(techTask => {response.json(techTask);console.log(TechTask)})
        .catch(error => response.status(400).json(`Server get-tech tsask error: ${error} `))
})

//2 API-EP for adding a new user
router.route('/add').post((request, response) => {
    const username = request.body.username
    const description = request.body.description
    const duration = request.body.duration
    const date = Date.parse(request.body.date)

    const newTechTask = new TechTask( {
       username,description,duration,date
    })

    newTechTask.save()
    .then(() => response.json("tech task added successfully"))
        .catch(error => response.status(400).json(`Server add-tech task error: ${error} `))

})

//3 API-EP for getting one techTask by id
router.route('/id:').get((request, response) => {
    TechTask.findById(request.params.id)
    .then(techTask => response.json(techTask))
    .catch(error => response.status(400).json(`tech task can't be found${error}`))
})

//4 API-EP for deleting one techTask by id
router.route('/id:').delete((request, response) => {
    TechTask.findByIdAndDelete(request.params.id)
    .then(() => response.json('tech task was deleted successfully!'))
    .catch(error => response.status(400).json(`tech task can't be deleted${error}`))
})

//5 API-EP for editing one techTask by id
router.route('/update/:id').post((request, response) => {
    TechTask.findById(request.params.id)
    .then(techTask => {
        techTask.username = request.body.username;
        techTask.description = request.body.description;
        techTask.duration = Number(request.body.duration);
        techTask.date = Date.parse(request.body.date) 

        techTask.save()
        .then(() => response.json('techTask was edited successfully!'))
        .catch(error => response.status(400).json(`techTask can't be edited${error}`))
    })
    .catch(error => response.status(400).json(`techTask can't be found while editing${error}`))
})

module.exports = router