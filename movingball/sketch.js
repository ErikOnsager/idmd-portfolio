var x = 25; //set starting x-pos of ball
var dir = 1; //set counter to modify ball's position & direction
var spd = 7; //variable for speed of the ball

let button;

function setup() {  
  button = createButton('reset'); //creating reset button
  button.position(655, 678);
  button.mousePressed(reset);
  createCanvas(700, 700); //creating the canvas & background
  background(120, 200, 255);
}

function reset(){ //reseting all values to their initial value
  x = 25; 
 dir = 1; 
 spd = 7; 
  fill(255,255,255);
}

function draw() {
  background(120, 200, 255); //rewrite background
  noStroke(); 
  ellipse(x, 100, 50, 50); //creating the ball
  if (x > 675 || x < 25) { //if the ball hits the side of the background
    dir = dir * -1;        //make the ball's speed negative, so it moves backwards
    fill(random(255),random(255),random(255)); //random color each bounce
  }
  x = x + dir*spd; //move the ball
}
