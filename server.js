const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.render('greeting', { data: 'hello'})
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})