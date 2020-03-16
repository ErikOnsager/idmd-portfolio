var size = 30;            //Creating variables for position & size
var z = 0

let button;

function setup() {       //Creating background
  createCanvas(600, 600);
  button = createButton('reset'); //creating reset button
  button.position(width-45, height-22);
  button.mousePressed(reset);
  background(255);
  noStroke();

  drawfunc = draw();
}

function reset(){ //having reset button completely reset the function & wipe the background
x = 250; 
y = 250; 
size = 30;
z = 0;
background(255,255,255);
}

function draw() {
  x=width/2
  y=height/2
  background(255,255,255);
  fill((size/2),0,0);       //setting color of ball proportional to size
  ellipse(x, y, size, size);     //creating the ellipse with variables
  distance = dist(x, y, mouseX, mouseY); //distance between ball and mouse
  if(size<=width&&size>1){         //
    if (distance < size / 2) { //if the mouse is on the ball
      size += 3;              //grow the ball to be larger
    } else {
      size = 30;              //if mouse leaves the ball, set back to original size
    }
  }
  if (size>=width){             //if the ball reaches the edge of the screen
    size = 0;                 //make the size of the ball 0
    z = 1;                 //set another variable for a new loop
  }
  if (z==1){               //once the ball reaches the edge of the screen, loop this
    background(random(255),random(255),random(255))    //random color bg
  }
}
