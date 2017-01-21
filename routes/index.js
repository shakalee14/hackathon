const express = require('express')
const router = express.Router()
const db = require('../database/db')

router.get('/', function(request, response, next) {
  response.render('index', { title: 'Hackathon' })
})

router.get('/about', function(request, response, next) {
  response.render('about')
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

module.exports = router;
