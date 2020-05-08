let bug = []; 
let bugs = 20;
let size = 30;

function setup() {
  createCanvas(400,400);
  for (i = 0; i < bugs; i++) {
    bug[i] = new JitterBug(random(width), random(height), size, color(0,255,0));
  }
}

function draw() {
  background(200,100,200);
  for (i = 0; i < bugs; i++) {
    bug[i].jitter();
    bug[i].display();
  }
}

function JitterBug(posx, posy, size, color) {
  this.posx = posx;
  this.posy = posy;
  this.size = size;
  this.speed = 1;
  this.color = color;
  
  this.display = function() {
    fill(this.color);
    ellipse(this.posx, this.posy, this.size, this.size);
  }

  this.jitter = function() {
    this.posx += random(-this.speed, this.speed);
    this.posy += random(-this.speed, this.speed);
  }

  this.kill = function() {
    this.speed = 0;
    this.color = "black";
  }

}

function mousePressed() {
  for (i = 0; i < bugs; i++) {
    x = dist(mouseX, mouseY, bug[i].posx, bug[i].posy)
    if (x <= size) {
      bug[i].kill();
    }
  }
}