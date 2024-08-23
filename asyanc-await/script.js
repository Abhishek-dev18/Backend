// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }

async function getData(){
   let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.text()
   console.log(x)
   return 455
     
}


async function  main() {
    console.log("HEllO")

let data = await getData()

console.log("Bye") 
}


// data.then((v)=>{
//     console.log("Bye")
// })

main()