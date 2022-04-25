const fetch = require('cross-fetch')
const express = require('express')
const app = express()
const port = 3000

const getUrlContents = (url) => {
  return new Promise((resolve, reject) => { 
    fetch(url, resolve, reject)
    .then(res => res.text())
    .then(body => resolve(body))
  })
}

app.get('/dashboard', async (req, res) => {
  //Get data from service 2 :: Movies
  const movies = await getUrlContents('http://localhost:3001/movies')
  res.type('json')
  res.send(JSON.stringify({ dashboard: movies }))
})

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`)})