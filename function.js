const container = document.querySelector(".container");

//selecting the buttons
const btnNorm = document.querySelector(".btn-norm"); 
const btnPencil = document.querySelector(".btn-pencil");
const btnColor = document.querySelector(".btn-color");





//calling function to create normal grids
function makeRows(num){
    let total = num * num; 
    for(let x = 0; x < total; x++){
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
    
        container.appendChild(cell);
        cell.addEventListener("mouseenter", drawGrid);

    }
    container.style.setProperty('--grid-rows', num); //changing 1 row to 16
    container.style.setProperty('--grid-cols', num);
}

//function create pencil grid 
function pencilGrid(num){
    let total = num * num; 
    for(let x = 0; x < total; x++){
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
    
        container.appendChild(cell);
        cell.addEventListener("mouseenter", pencilDraw);

    }
    container.style.setProperty('--grid-rows', num); //changing 1 row to 16
    container.style.setProperty('--grid-cols', num);
}

function colorGrid(num){
    let total = num * num; 
    for(let x = 0; x < total; x++){
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
    
        container.appendChild(cell);
        cell.addEventListener("mouseenter", colorDraw);

    }
    container.style.setProperty('--grid-rows', num); //changing 1 row to 16
    container.style.setProperty('--grid-cols', num);
}



//misc
function clear(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}


function randomColor (){

    //pick a red from 0 - 255 
    
    var r = Math.floor(Math.random() * 256);  
    //pick a blue from 0 -255 
    var  b = Math.floor(Math.random() * 256); 
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256); 
    
    return "rgb(" + r +", " + g +", "+ b + ")";
    
}





//prompt to ask user input & reseting
function newGrid(){
    clear();
    let userInput = prompt("how many grids do you want?");
    makeRows(userInput);
}

function pencilNew(){
    clear();
    let userInput = prompt("how many grids do you want?");
    pencilGrid(userInput);
}

function colorNew(){
    clear();
    let userInput = prompt("how many grids do you want?");
    colorGrid(userInput);
}




//function to "draw"
function drawGrid(){
    this.classList.add("normalDraw");
}
function pencilDraw(){
    this.classList.add("pencilDraw");
}
function colorDraw(){
    this.style.background = randomColor();
}

//buttons listening
btnNorm.addEventListener("click", newGrid);
btnPencil.addEventListener ("click", pencilNew);
btnColor.addEventListener ("click", colorNew);


makeRows(16);