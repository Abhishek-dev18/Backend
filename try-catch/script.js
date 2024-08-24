let a= prompt("Enter a number")

let b= prompt("Enter a number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry Not A Number, Not allowed")
}
let sum =  parseInt(a)+parseInt(b)
let x=5
try {
    console.log("Sum: ",sum*x)
} catch (error) {
    console.log("Error")
    console.log(error.name)
    
}
finally{
    console.log("Closed")
}


