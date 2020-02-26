function setup() {
  createCanvas(700, 700);
}

function draw() {
  for (k = 0; k < 700; k++) { //For loop to draw 700 lines that slightly change color
    stroke(k*0.9, k*0.25, 205);    //color
    line(0, k, 700, k);   //drawing the line at the y-level k
  }
}