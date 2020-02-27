function setup() {
  createCanvas(700, 700);
}
k=0;

function draw() {
  while (k < 700) { //For loop to draw 700 lines that slightly change color
    stroke(k*0.9, k*0.25, 205);    //color
    line(0, k, 700, k);   //drawing the line at the y-level k
    k++
  }
}
