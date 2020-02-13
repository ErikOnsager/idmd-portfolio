let button;

function setup() {
  button = createButton('reset'); //creating reset button
  button.position(455, 478);
  button.mousePressed(reset);
  createCanvas(500, 500); //creating canvas and background
  background(255, 0, 0);
}

function reset(){
background(255,0,0); //reset button rewrites background
}

function draw() {
  if(mouseIsPressed) { //when mouse is pressed, create a line from a set point to the mouse's location
    stroke(50, 0, 50);  
    line(150, 150, mouseX, mouseY);
    circle(mouseX,mouseY,10); //create a randomly colored circle at mouse's location
    fill(random(255),random(255),random(255)); 
  }
}