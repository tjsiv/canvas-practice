// import { randomIntFromRange, randomColor, distance } from './utils.js';

// Use the imported functions as needed


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
let gravity = 1;
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
  
})
addEventListener('click', function(){
  init();
})

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
}

Ball.prototype.update = function() {
  if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * 0.99;
  } else {
      this.dy += gravity;
  }
  if (this.x + this.radius + this.dx > canvas.width || this.x -this.radius <= 0) {
      this.dx = -this.dx * 0.99;
  } 


  this.x += this.dx;
  this.y += this.dy;
  this.draw();
};

Ball.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.stroke()
  c.closePath();
};

    
  

  


// Implementation
let ball;
let ballArray;
function init() {
  ballArray=[];
  ball = new Ball(canvas.width/ 2, canvas.height / 2, 1, 30, 'red')
  
  for(let i = 0; i < 500; i++){
    var radius = randomIntFromRange(8, 30)
    var color = randomColor(colors);
    let x = randomIntFromRange(0, canvas.width - radius)
    let y = randomIntFromRange(0, canvas.height - radius)
    let dx = randomIntFromRange(-2,2)
    let dy = randomIntFromRange(-2,2)
    ballArray.push(new Ball(x, y, dx, dy, radius, color))
  }

}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)

 
  c.clearRect(0, 0, canvas.width, canvas.height)
   for(let i = 0; i < ballArray.length; i++){
    ballArray[i].update();
  }
  ball.update()
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
animate()
