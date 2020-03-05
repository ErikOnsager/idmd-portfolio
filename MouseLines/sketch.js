function setup() {
  createCanvas(400, 400);
  strokeWeight(4); //size of lines
}

function draw() {
  background(190);
  
  for(i = 10; i < mouseY; i = i + 18){ //drawing lines in Y direction based on mouse position
    line(0, i, 390, i);  
  }
  for(j = 10; j < mouseX; j = j + 18){ //drawing lines in X direction based on mouse position
    line(j,0,j,390);  
  }
}
