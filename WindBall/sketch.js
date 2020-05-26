// Mover taken from The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(200, 0, 200);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }
  checkEdges() {
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }
    if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y < this.radius) {
      this.position.y = this.radius;
      this.velocity.y *= -1;
    }
  }
}

//my code below

let ball;

function setup() {
  createCanvas(500,500);
  ball = new Mover(250,50,5);
}

function draw() {
  background(75);

  if (mouseIsPressed) {
    let wind = createVector((ball.position.x-mouseX)/500, (ball.position.y-mouseY)/500);
    ball.applyForce(wind);
  }

  ball.update();
  ball.display();
  ball.checkEdges();
}