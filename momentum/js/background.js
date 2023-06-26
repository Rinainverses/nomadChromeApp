const images = [
    "0.png",
    "1.png",
    "2.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
const clockWord = document.querySelector("#clock");
const weatherWord = document.querySelector('#weather')
const todoWord = document.querySelector('#todo-form div');
const quotesWord = document.querySelector('#quote');
const todoListWord = document.querySelector('#todo-list');
const loginLine = document.querySelector('#login-input');
const todoLine = document.querySelector('#todo-input');
const loginBtnColor = document.querySelector('#button');
const loginFormColor = document.querySelector('#login-form');


bgImage.id = "bg-image";
bgImage.classList.add("img-fluid");
bgImage.src = `img/${chosenImage}`;
const container = document.createElement("div");
container.className = "col-3 col-me-7 col-sm-10 col-12 mx-auto";
container.appendChild(bgImage);

if (chosenImage == "1.png") {
    clockWord.style.color = "black";
    weatherWord.style.color = "black";
    todoWord.style.color = "black";
    quotesWord.style.color = "black";
    todoListWord.style.color = "black";
    loginLine.style.borderBottom = "3px solid black";
    loginLine.style.color = "black";
    todoLine.style.borderBottom = "3px solid black";
    todoLine.style.color = "black";
    loginBtnColor.style.backgroundColor = "black";
    loginBtnColor.style.color = "white";
    
    
}
document.body.appendChild(container);

