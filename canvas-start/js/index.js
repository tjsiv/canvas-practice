//set up a canvas
//resizing the canvas `-`css can't take up the entirety of the screen but js can`-`
let canvas = document.querySelector('canvas'); //saves the html object as variable

//in css you will want to set the margin on the body element to 0 so that the
//canvass can stretch to cover the full screen the body has a default margin of 8px

canvas.width = window.innerWidth; //takes window width
canvas.height = window.innerHeight; //takes window height

//drawing on the canvas
//c is shorthand for context and by passing the get contecxt 2d method
//we pass alog a class which acts like a paint brush to paint the canvas

let c = canvas.getContext('2d');

/* Part 1 break bracket on line 69 and remove the "," to see *,/

c.fillStyle = 'rgba(255, 0, 0, 0.5)';//this changes the color of the 🟥 uses css color property

c.fillRect(100, 100, 100, 100); //takes an x,y width, height \x,y\positioned from top left
c.fillRect(250, 200, 100, 100);
c.fillStyle = 'rgba(25, 25, 255, 0.5)' // fill style affects whatever is instantiated after it
c.fillRect(300, 450, 100, 100);
c.fillRect(50, 600, 100, 100);

//with the canvas we can draw arcs(helpful to make circles), lines, rectangles, bezier curves, text, and images plus more

//lets draw some new shapes
//we  will makes some lines and circle

//LINES
c.beginPath();//The beginPath() method is called before beginning each line or arc
c.moveTo(50, 400);//we make a starting point. uses x,y as params

c.lineTo(500,300)//make and point for your line to connect to
c.lineTo(500,600);//here we add another point untill we redeclare beginPath() we build
c.lineTo(50,400)//here i made the last leg of my triangle

c.strokeStyle = "#fa34a3"; //this changes the color of the line uses any css color proprerty
c.stroke()//stroke adds the color to the line the will be invisible until then

// ARC / Circle

//arcs take 6 parameters:
//takes pos(x,y) raius(int) start Angle(radians)`-`the angle we start the arc`-`
// end Angle(radian) `-` how long the arc goes on for`-` drawCounterClockWise(true/False)
// c.beginPath();
// c.arc(300, 800, 60, 0, Math.PI * 2, false);
// c.strokeStyle = 'orange';
// c.stroke();

//repition
//procedurly generate shape
for(let i=0; i < 15; i++) {
    //here we randomize the position
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    //here we randomize colors for rgb value
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    c.beginPath();
    c.arc(x, y, 60, 0, Math.PI * 2, false)
    c.strokeStyle = `rgb(${r},${g},${b})`;
    c.stroke();
}
*/

//``````````````````````````PART 2```````````````````````````````````````//
// lets do some animating I'll comment out what happening above
// let radius = 60;
// let x = Math.random() * (window.innerWidth - radius * 2) + radius;
// let dx = (Math.random() - 0.5) * 4;
// let y = Math.random() * (window.innerHeight - radius * 2) + radius;
// let dy = (Math.random() - 0.5) * 4;
// function animate(){

//     requestAnimationFrame(animate); //this essentialy makes a loop
//     c.clearRect(0, 0, innerWidth, innerHeight) //we call this because the circle will redraw itslef over and over again with out it
//     circle.update();

//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
//     //console.log('.')//if you log you can see it is updating but indreibly small movements
    

//     x += dx; //this is incrementing x to update its position you could say its velocity it 1px to the right
//     //the circle is going off screen though let define a boundry with an if statement
//     if (x + radius > innerWidth || x - radius < 0){
//         dx = -dx;
//     }
    
//     /*so lets disect this if statement. It first take the x value plus the radius and adds them to make sure that
//     the edge of the circle is what bounce not the center of the circle the we add an or statement to target the other end
//     then when the x value aproaches the max window with the velocity goes negative effectively reversing it.
//     we can also do this with a y variable and velocity*/
//     //     y+= dy;
//     //     if (y + radius > innerWidth || y - radius < 0){
//     //         dy = -dy;
//     //     }
//     //     //this is cool but lets ranamoize the postition by changing lines 72-75 
//     // //}
//     // animate()



// lets refactor our last example with a few aextra circles
// first lets make an object function
// function Circle(x, y, dx, dy, radius){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius; 

//     this.draw = function(){ //now we need a funciton to draw a circle
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = 'blue';
//         c.fill();
//         c.stroke();
        
//     }
    
//     this.update = function(){ //here is our boundry limmiter updated to better acount for the corners of the screen
//        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
//             this.dx = - this.dx;
//         }
//         if (this.y + this.radius > innerWidth || this.y - this.radius < 0){
//             this.dy = - this.dy;
//         }
//         this.x += this.dx;
//         this.y+= this.dy;
//         this.draw(); //this will keep the animation going
//     }     
// }
// //lets make abunch of random circles
// let circleArray= []; 
// for (let i = 0; i<100; i++){ //this loop will hold our values from up top
//     let radius = 60;
//     let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//     let dx = (Math.random() - 0.5) * 4;
//     let y = Math.random() * (window.innerHeight - radius * 2) + radius;
//     let dy = (Math.random() - 0.5) * 4;
    
//     circleArray.push(new Circle(x, y, dx, dy, radius));
// }

// function animate(){
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, innerWidth, innerHeight)

//     for(let i = 0; i< circleArray.length; i++){
//         circleArray[i].update();
//     }
    
// }
// animate() 

//`````````````````````````````````PART 3````````````````````````````````````//
//event listers and interactions

// lets add and event lister that tracks our mouse position
//each time our mouse moves the system shows a event at the coordinate x and y
// window.addEventListener('mousemove', (event)=>{
//     mouse.x = event.x;
//     mouse.y = event.y;
// });
// //lets make an object to hold all these coordinates and update them
// let mouse = {
//     x: undefined,
//     y: undefined
// }
// //lets make our circles dynamic by changing their radius sizes
// //in order to match thier random positions and set them to a specific size 
// //so they don't get too huge or small
// let maxRadius = 40;
// let minRadius = 4;

// //we can also randomize the colors for them to be filled with
// //you can use the rgb variables from part 2 aswell
// let colorArray = [
//     '#2596be',
//     '#e28743',
//     '#21130d',
//     '#eeeee4',
//     '#873e23',
//     '#76b5c5',
//     '#154c79'
// ]
// //Now lets also make sure that if we resize the window our circles spawn properly
// //by adding another event lister
// window.addEventListener('resize', ()=>{
//     canvas.width = window.innerWidth; //takes window width
//     canvas.height = window.innerHeight; //takes window height 
//     init();  //this is a function we will declare to better spawn circles on resize
// });

// //we need to update this object with our new random radius
// //You'll notice when we do the circles start out with a random size but don't shrink
// // or grow properly they got till forever. We'll need a max and min
// function Circle(x, y, dx, dy, radius){
//         this.x = x;
//         this.y = y;
//         this.dx = dx;
//         this.dy = dy;
//         this.radius = radius;
//         this.minRadius = radius; //thiss will alow them to shrink to thier og size
//         this.color = colorArray[Math.floor(Math.random()* colorArray.length)]; //random color here
    
//         this.draw = function(){ //now we need the funciton to draw our circle updated 
//             c.beginPath();
//             c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//             // c.stroke(); //this is an optional style choice
//             c.fillStyle = this.color; //makes them random color
//             c.fill();
            
            
//         }
        
//         this.update = function(){ //we'll use the ssame logic from the last part
//            if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
//                 this.dx = - this.dx;
//             }
//             if (this.y + this.radius > innerWidth || this.y - this.radius < 0){
//                 this.dy = - this.dy;
//             }
//             this.x += this.dx;
//             this.y+= this.dy;

//             //we'll make some changes for the interactiviy section
//             //interactivity

// //we'll call an if statement so that if a circle is within 50px of our mouse it will
// //grow. It will then shrink ounce it is 50px away we need to check 4 things:
//             if (mouse.x -this.x < 50 && mouse.x - this.x > -50 //the 2 x values
//                 && mouse.y - this.y < 50 && mouse.y -this.y > -50){ //and the 2 y values
//                 if(this.radius < maxRadius){ //as long as our circle radius isn't past the max
//                                             //our circle wil start growing
//                     this.radius += 1;
//                 }
//             } else if(this.radius > this.minRadius){//this controls how small a circle will shrink to
//                 this.radius -= 1 ;
//             }
//             this.draw();
//         }     
// }

// let circleArray= []; //we'll declare this outside to put it in scope

// function init(){ //lets make a function to better spaw our circles.
//     circleArray = []; //I like the look of about 900 circles
//     for (let i = 0; i<1000; i++){  //try as many circles as you can 
//         //lets get those random sizes on x and y 
//         let radius = Math.random() * 6+ 1;
//         let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//         let dx = (Math.random() - 0.5) * 4;
//         let y = Math.random() * (window.innerHeight - radius * 2) + radius;
//         let dy = (Math.random() - 0.5) * 4;
        
//         circleArray.push(new Circle(x, y, dx, dy, radius)); //lets push to our new array
//     }
// }

// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     for(let i = 0; i< circleArray.length; i++){//now we can animate the array with a loop
//         circleArray[i].update();
//     }
    
// }
// init();//don't forget to initialize the array before animating
// animate();

// //part 3 is lines 169 to 279 un comment to see
// //``````````````````````````````PART 4```````````````````````````
// // -*-*-*-WHAT GOES UP MUST COME DOWN-*-*-*- lets add gravity
// // look to the grav folder for more info