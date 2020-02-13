let button; 

function setup() {
  button = createButton('reset');  //creating reset button
  button.position(755, 778);
  button.mousePressed(reset);
  createCanvas(800, 800);  //creating canvas
  background(0,255,255); //creating background
}

function reset(){
background(0,255,255);  //conditions for reset button
}

function draw() {
  if (mouseIsPressed){  //change ellipse fill to random color when mouse is pressed
    fill(random(255),random(255),random(255));
  }
 ellipse(mouseX,mouseY,80,80) //create an ellipse at the mouse's location
}