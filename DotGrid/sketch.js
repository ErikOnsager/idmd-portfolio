function setup() {
  createCanvas(600, 600);
  background(255,255,255)
}

function draw() {
  for(y = 0; y < height+10; y = y + 10){ //nested for loop to go through every x & y point
    for(x = 0; x < width+10; x = x + 10){
      point(x,y);  //drawing the dot at that point
    }
  }
}