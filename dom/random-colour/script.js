
let box = document.getElementsByClassName("box")   //by class name


arr=["red","green","blue","gray","yellow"]

let i=0


for(i=0;i<5;i++){

    let ran = Math.floor(Math.random()*5);
    box[i].style.backgroundColor= arr[ran]
    let rann = Math.floor(Math.random()*5);
    box[i].style.color = arr[rann]

}




/*
document.getElementById("red").style.background ="red"  //by id

document.querySelector(".box").style.backgroundColor = "green"   //by query (only first element)

*/

