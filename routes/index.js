const express = require('express')
const router = express.Router()
const db = require('../database/db')

router.get('/', function(request, response, next) {
  response.render('index', { title: 'Hackathon' })
})

router.get('/team', function(request, response, next) {
  response.render('team')
})

router.post('/', function(request, response, next) {
  let username = request.body.username
  let email = request.body.email
  let idea = request.body.hackathonidea

 db.createParticipant( username, email, idea )
  .then( participant => {
    response.render('thankyou')
  })
  .catch( error => {
    response.render('error')
  })

})


router.post('/team', function(request, response, next) {
  let teamname = request.body.teamname
  let teammate1 = request.body.teammate1
  let teammate2 = request.body.teammate2
  let teammate3 = request.body.teammate3
  let teammate4 = request.body.teammate4

 db.createTeam( teamname, teammate1, teammate2, teammate3, teammate4 )
  .then( team => {
    response.render('thankyou')
  })
  .catch( error => {
    response.render('error')
  })

})

module.exports = router;
