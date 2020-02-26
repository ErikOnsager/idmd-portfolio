function setup() {
  createCanvas(400, 400);
}

function draw() {
}

function keyTyped() { //If rgb is pressed, then the background becomes that color
  if (key === 'r') {
    background(255,0,0)
  }
  else if (key === 'g') {
    background(0,255,0)
  }
  else if (key === 'b') {
    background(0,0,255)
  }
  else{
    background(255,255,255) //otherwise, display the letter on the screen
    textSize(100);
    text(key, 200, 200);
  }
}
  