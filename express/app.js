const express = require("express")   //module import

const app = express();                 // make an app with module
const port = 80;

app.get("/",(req,res)=>{              //whenever somone goes(get) to "/" url of this app then

    res.send("This is My first express application")           // this is the response
//  res.status(200).send("This is My first express application")           // this is the response with code 200
})

app.get("/about",(req,res)=>{        //whenever somone goes(get) to "/about" url of this app then
                             
    res.send("This is My About of express application")           // this is the response
})



app.post("/about",(req,res)=>{        //whenever somone goes (post) to "/about" url of this app then
                             
    res.send("This is My Post request About of express application")           // this is the response
})

//for error message 
app.get("/this",(req,res)=>{        //whenever somone goes (get) to "/about" url of this app then
                             
    res.status(404).send("This page is not found")           // this is the response
})


app.listen(port, ()=>{                  //port on which i want to listen

    console.log(`The Application Started Successfully on Port ${port}`)    //just message
})

//now run and chek it with post man the response