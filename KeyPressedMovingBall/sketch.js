function setup() {
  createCanvas(400, 400);
}
posx=50
posy=50

function draw(){
  var d = dist(mouseX, mouseY, posx, posy);
  if (d < 30) {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }
  
  
  
  background(100,0,0)
  ellipse(posx,posy,50,50);         //Define ellipse with position variables
  if (keyIsPressed && key == 'd' && posx<=375) { //Control movement with wasd by changing posx&y
    posx+=2;
  }
  if (keyIsPressed && key == 'a' && posx>=25) {
    posx-=2;
  }
  if (keyIsPressed && key == 'w' && posy>=25) {
    posy-=2;
  }
  if (keyIsPressed && key == 's' && posy<=375) {
    posy+=2;
  }
}
