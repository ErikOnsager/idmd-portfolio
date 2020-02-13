//Some of your code copied due to an infinite for-loop crash in my code, but mine was virtually the same, just with a few tweaks/rewords. 

var x = 250; 
var y = 250; 
var size = 30;            //Creating variables for position & size
var z = 0

let button;

function setup() {       //Creating background
  button = createButton('reset'); //creating reset button
  button.position(455, 478);
  button.mousePressed(reset);
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function reset(){ //having reset button completely reset the function & wipe the background
x = 250; 
y = 250; 
size = 30;
z = 0;
background(255,255,255);
}

function draw() {
  background(255,255,255);
  fill((size/2),0,0);       //setting color of ball proportional to size
  ellipse(x, y, size, size);     //creating the ellipse with variables
  distance = dist(x, y, mouseX, mouseY); //distance between ball and mouse
  if(size<=500&&size>1){         //
    if (distance < size / 2) { //if the mouse is on the ball
      size += 3;              //grow the ball to be larger
    } else {
      size = 30;              //if mouse leaves the ball, set back to original size
    }
  }
  if (size>=500){             //if the ball reaches the edge of the screen
    size = 0;                 //make the size of the ball 0
    z = 1;                 //set another variable for a new loop
  }
  if (z==1){               //once the ball reaches the edge of the screen, loop this
    background(random(255),random(255),random(255))    //random color bg
  }
}