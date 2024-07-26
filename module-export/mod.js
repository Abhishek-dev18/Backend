console.log("Module")

function average(arr){     //function to compute average
    let sum =0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
 
module.exports = {                  //exporting the function as module
    avg: average   ,
    name: "Abhi",
    repo: "Github"                   //multipe exporting using object
}