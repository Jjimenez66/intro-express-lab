// import modules

import express from 'express'
import { students } from './data/students-data.js'
// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// Mount routes
app.get('/students', function(req,res){
  res.render('students/index', {
    students: students
  })
})


app.get('/', function(req, res) {
  res.redirect('home')
})



// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})