function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200,200,200);
  stroke(50,0,0)
  var x = 30
  for (x = 30; x < width; x += 30) {
    var xpos = mouseX / 10;
    var offset1 = random(-xpos, xpos);
    var offset2 = random(-xpos, xpos);
    line(x + offset1, 20, x + offset2, height-20);
  }
}