var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var button = document.querySelector("button");


function addh3(){
    return h3.textContent = color1.value + "and" + color2.value;
}
addh3();

function executeEvent(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";
    addh3()
}

function generateRandomNo(){
    var hexaDec = "0123456789abcdef";
    var colors = "#";
    for (var i=0; i<6; i++){
        colors += (hexaDec[Math.floor(Math.random() * 16)]);
    }
    return colors;
}


function changeBackground(){
    color1.value = generateRandomNo();
    color2.value = generateRandomNo();
    executeEvent()
}


color1.addEventListener("input", executeEvent)

color2.addEventListener("input", executeEvent)

button.addEventListener("click", changeBackground)


