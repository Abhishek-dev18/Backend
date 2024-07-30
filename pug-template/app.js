const express = require("express")   
const app = express();                
const port = 80;
const path = require("path");            


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))     //static files

// PUG SPECIFIC STUFF
app.set('view engine' ,'pug')   //  set the template engine as pug
app.set('views', path.join(__dirname,'views'))  //set the views directory


// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best"
    const params = {'title' : 'pug is the best dog', 'content': con}
    res.status(200).render('index.pug',params);
  })


// START THE SERVER
app.listen(port, ()=>{    

    console.log(`The Application Started Successfully on Port ${port}`)
})