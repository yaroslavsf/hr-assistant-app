const router = require('express').Router()
let User = require('../models/user.model')

// 1 API-EP for a list of users (default route)
router.route('/').get((request, response)=> {
    User.find()
        .then(users => {response.json(users); console.log(users)})
        .catch(error => response.status(400).json(`Server get-users error: ${error} `))
})

// 2 API-EP for adding a user
router.route('/add').post((request, response) =>{

})

module.exports = router
