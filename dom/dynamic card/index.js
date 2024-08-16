
function card(title, name, views ,months ,duration,pic){
    let vstr
    if (views<1000000){
        vstr = views/1000 + "K";
    }
    else if(views>1000000){
        vstr = views/1000000 + "M";
    }else{
        vstr = views/1000 + "K";
    }
        
    let html = `<div class="card">
            <div class="image">
                <img class="imag" src="${pic}"  
                <div class="capsule">${duration}</div>
                </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${name}. ${vstr} views . ${months} months ago</p>
            </div>

        </div>`
        document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html
}


card("Jhon","Codejhon",560000,7,"31:22","https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg")
