/*
let ele = document.getElementsByClassName("box")    //by class name
console.log(ele)

ele[5].style.backgroundColor = "red"


document.getElementById("red").style.background ="red"  //by id

document.querySelector(".box").style.backgroundColor = "green"   //by query (only first element)


document.querySelectorAll   //returs an array 
document.querySelectorAll(".box").forEach(e=>{          //loop to iterate all element
    e.style.backgroundColor = "green"   
})


document.getElementsByTagName("div")
*/

ele.matches("exp")   //to check if element matches or not   ele==exp
ele.closest("exp")   //to find the closest from it          ele near to exp 
ele.contains("exp")     // to check if ele contains exp       exp in ele or not