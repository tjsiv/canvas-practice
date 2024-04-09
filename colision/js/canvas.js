// import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: 10,
  y:10
}

//util functions
function getDistance(x1, y1, x2, y2){ //takes distance between 2 objects a^2 + b^2 = -v/c
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

// function distance(x1, y1, x2, y2) { distance function
//   const xDist = x2 - x1
//   const yDist = y2 - y1

//   return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
// }

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => { //tracks mouse position
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => { //makes sure to update canvas on screen resize
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
function Circle(x, y, /*dx, dy,*/ radius, color) { // makes a cirle dy and x not commented cause these circles don't move
  this.x = x;
  this.y = y;
  // this.dx = dx;
  // this.dy = dy;
  this.radius = radius;
  this.color = color;
}

Circle.prototype.update = function() {

  this.draw();
};

Circle.prototype.draw = function() { //dras a circle
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.stroke()
  c.closePath();
};

// Implementation
let circle1;
let circle2;
function init() { //initializes 2 circles
  circle1 = new Circle(300, 300, 100, 'black');
  circle2 = new Circle(undefined, undefined, 30, 'red');

}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)//makes sure circle only apear at thier positions
  circle1.update()//keep c1 in place
  circle2.x = mouse.x;//these next 2 lines make circle 2 follow the mouse cursor
  circle2.y = mouse.y;
  circle2.update()

  //this if statement checks if the circle one and two touch
  //it does this by comparing the distance between the circles to the distance from the middle of 
  //each circle to its outer radius if circle 1 has a radius of 5 and circle 2 has a radius of 3
  //then when the distance be tween them is less than 8 ('5+3') the circles are touching
  if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius){
    circle1.color = 'red'
  } else{
    circle1.color = 'black'
  }
  console.log(getDistance(circle1.x, circle1.y, circle2.x, circle2.y));

}

init()
animate()
