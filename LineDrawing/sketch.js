function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}
function draw() {
  if(mouseIsPressed) {
    stroke(50, 0, 50);
    line(150, 150, mouseX, mouseY);
    circle(mouseX,mouseY,10);
    fill(random(255),random(255),random(255));
  }
}