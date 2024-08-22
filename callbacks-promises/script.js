console.log("This is A Promise");

let prom1 = new Promise((resolve, reject)=>{
    let a = 4;
    if(a<5){
        reject("NO less than 5")
    }
    else{
        resolve("More than 5")
    }


})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})