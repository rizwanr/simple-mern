const express = require('express')

const app = express()

const port = 8080

app.get('/', (req, res) => {
  res.send('hello world')

})

app.get('/heartbeat', (req, res) => {
  res.send({
    dateTime: new Date().toJSON()
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))