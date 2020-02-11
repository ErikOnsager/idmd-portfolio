function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (mouseIsPressed){
    fill(random(255),random(255),random(255));
  }
 ellipse(mouseX,mouseY,80,80)
}