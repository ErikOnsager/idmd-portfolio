function setup() {
  createCanvas(600, 600);
  background(255,255,255);
  noFill(); //so that the circles don't cover up each other
  
  for(d = 0; d < width; d = d + 20){ //for loop to go through, increasing the sizes
    ellipse(width / 2, height / 2, d, d);  //drawing an ellipse at each size
  }
}