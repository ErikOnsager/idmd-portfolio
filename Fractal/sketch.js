upperlim = 400;
upperlim2 = 400;
lowerlim = 40;
transp = 100;
count=0;
z=0;

function drawLine(x, y, upperlim, upperlim2) {
  strokeWeight(5);
  stroke(random(255),random(255),random(255),transp);
  rect(x, y, upperlim, upperlim2);
  if (upperlim>lowerlim) {
    drawLine(x + upperlim/2, y, upperlim/2, upperlim2/2);
    drawLine(x - upperlim/2, y, upperlim/2, upperlim2/2);
    drawLine(x, y + upperlim/2, upperlim/2, upperlim2/2);
    drawLine(x, y - upperlim/2, upperlim/2, upperlim2/2);
  }
}

function setup() {
  createCanvas(600, 600);
  background(0);
  noFill();
  rectMode(CENTER);
  drawLine(width / 2, height / 2, upperlim, upperlim2);
}
