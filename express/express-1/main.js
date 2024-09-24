const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))     //for serving a public file from a folder named public

// app.get('/about/:slug', (req, res) => {             // 3000/about/Abhishek
//   res.send(`Hello ${req.params.slug} World!`)        // Hello Abhishek World
// })

// app.get('/about/:slug/:second', (req, res) => {             // 3000/about/Abhishek/Jhon
//     res.send(`Hello ${req.params.slug} World! and ${req.params.second}`)        // Hello Abhishek World and Jhon
//   })

app.get('/about/:slug', (req, res) => {             // 3000/about/abhishek-ok?Mode=dark&col=black
    console.log(req.params)                         // { slug: 'abhishek-ok' }
    console.log(req.query)                          // { Mode: 'dark', col: 'black' }
  res.send(`Hello ${req.params.slug} World!`)        // Hello abhishek-ok World!
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})