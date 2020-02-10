var x = 25; //set starting x-pos of ball
var dir = 1; //set counter to modify ball's position & direction
var spd = 3; //variable for speed of the ball

function setup() {    //creating the canvas
  createCanvas(300, 200);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke(); 
  ellipse(x, 100, 50, 50); //creating the ball
  if (x > 275 || x < 25) { //if the ball hits the side of the background
    dir = dir * -1;        //make the ball's speed negative, so it moves backwards
    fill(random(255),random(255),random(255)); //random color each bounce
  }
  x = x + dir*spd; //move the ball
  // x = (x + 1) % 275;
  // x = min(x + 1, 275);
  // x = x + 1;
}