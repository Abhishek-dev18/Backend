const express = require('express')
const app = express()
const port = 3000


app.set('view engine','ejs');

app.get('/', (req, res) => {
let siteName = "Adidas"
let searchText = "Search Now"
res.render("index",{siteName:siteName,searchText:searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "Adidas why and when"
    let blogcontent = "Its a very good brand"
    res.render("blogpost",{blogcontent:blogcontent, blogtitle:blogtitle})
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})