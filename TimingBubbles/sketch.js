var timer1 = 2000; // in thousands, number of seconds to the right
var timer2 = 4000; //number of seconds to the left
var x = 0;

function setup() {
  createCanvas(500, 150);
}

function draw() {
  var time = millis();
  background(204);
  if (time > timer2) {
    x -= 1;
    if (x < 0) {
      timer1 = millis();
      timer2 = timer1 + 2000;
    }
  } else if (time > timer1) {
    x += 2;
  }
    
  ellipse(x, 75, 90, 90);
}