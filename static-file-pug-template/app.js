const express = require("express")   //module import

const app = express();                 // make an app with module
const port = 80;

const path = require("path");             //for pug template 

//for serving static file
app.use('/static', express.static('static'))     //so that what ever is in my ststic folder will be static

//set the template engine as pug
app.set('view engine' ,'pug')

//set the views directory
app.set('views', path.join(__dirname,'views'))


//pug demo point
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.listen(port, ()=>{                  //port on which i want to listen

    console.log(`The Application Started Successfully on Port ${port}`)    //just message
})

//now run and chek it with post man the response