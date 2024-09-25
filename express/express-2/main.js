const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')


app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hello World! get')
})

app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World! post')
  })

  app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World! put')
  })

  app.delete('/', (req, res) => {
    console.log("Hey its a delete request")
    res.send('Hello World! delete')
  })

  app.get('/index', (req, res) => {
    res.sendFile('template/index.html', {root: __dirname} )
  })

  app.get('/api', (req, res) => {
    res.json({a:1,b:2})
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})