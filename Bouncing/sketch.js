var x = 320;
var y = 400;  //starting position
var x2 = 420;
var y2 = 150;
var xspeed2 = 5;
var yspeed2 = -10;
var xspeed = -15;
var yspeed = 10;  //speed of the ball
var z = 1   //var for background

var dir = 1; //set counter to modify ball's position & direction
var spd = 3; //variable for speed of the ball

var r = 40; //radius of the ball

function setup() {
  createCanvas(900, 550);  //canvas for ball to bounce
  for (var b=0; b<9; ++b)
  {
  	for (z=0; z<10; ++z)
  	{
      fill ([z*20+b*10, 0, 100, 9]);     //writing color for each ball
    	ellipse(z*100, b*100, 250, 250);
  	}
  }
}

function draw() {
  noStroke();
  background([0, 100, 100, 7]);     //writing background color
  
  
  ellipse(x, y, r*2, r*2);  //sets position of the ball and the size
  ellipse(x2, y2, r, r);
  x += xspeed;
  x2 += xspeed2;
  y += yspeed; 
  y2 += yspeed2;    //starts the motion of the ball
  if (x > width - r || x < r) {
    xspeed = -xspeed;                    //when the ball hits the edge of the canvas, bounce
  }
  if (x2 > width - r || x2 < r) {
    xspeed2 = -xspeed2;                    //when the ball hits the edge of the canvas, bounce
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;                    //when the ball hits the edge of the canvas, bounce
  }
  if (y2 > height - r || y2 < r) {
    yspeed2 = -yspeed2;                    //when the ball hits the edge of the canvas, bounce
  }


  
  ellipse(x, 100, 50, 50); //creating the ball
  if (x > 275 || x < 25) { //if the ball hits the side of the background
    dir = dir * -1;        //make the ball's speed negative, so it moves backwards
  }
  x = x + dir*spd; //move the ball
      fill(random(255),random(255),random(255)); 
  
}