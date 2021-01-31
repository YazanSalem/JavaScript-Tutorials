const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
     const randomNumber = randomGenerator();
     document.body.style.backgroundColor = colors[randomNumber];
     color.textContent = colors[randomNumber];
});

function randomGenerator(){
     return Math.floor(Math.random() * colors.length);
}