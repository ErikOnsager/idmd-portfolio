var x = 250; //Ended up copying some of your code as I had my editor                crash due to a bad for loop, had a similar idea going for me though
var y = 250; 
var size = 30;            //Creating variables for position & size
var z = 0

function setup() {       //Creating background
  createCanvas(500, 500);
  background(255);
  noStroke();
}
function draw() {
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