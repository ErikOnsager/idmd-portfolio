function setup() {
  createCanvas(500,500);
}
posx = 50
posy = 50

function draw() {
  var d = dist(mouseX, mouseY, posx, posy);
  if (d < 25) {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }



  background(100, 0, 0)
  ellipse(posx, posy, 50, 50); //Define ellipse with position variables
  if (keyIsPressed && keyCode == RIGHT_ARROW && posx <= width-25) { //Control movement with wasd by changing posx&y
    posx += 2;
  }
  if (keyIsPressed && keyCode == LEFT_ARROW && posx >= 25) {
    posx -= 2;
  }
  if (keyIsPressed && keyCode == UP_ARROW && posy >= 25) {
    posy -= 2;
  }
  if (keyIsPressed && keyCode == DOWN_ARROW && posy <= height-25) {
    posy += 2;
  }
}
