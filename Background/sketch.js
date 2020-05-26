//Just as a quick note: this won't always generate something amazing on the first try, so try running it a few times to get something cool!
function setup() {
  createCanvas(800, 800);
  background(200, 100, 100);
}

var angle1 = 0.05; //vars for main
var angle2 = 0.9;
var size = 19; //controls the size of the main line drawing

var color1 = 200 //vars for background
var color2 = 100
var color3 = 200

var counter = 1
var x = 800
var y = 800
var poscount = 0
var negcount = -400

function draw() {

  fill(random(100, 255), 0, random(100, 255))
  
  if (counter == 1) {          //This draws the background
    for (let x = negcount; x < poscount; x += 0.05) {

      line(900, 900, x, y)   //creating lines from the bottom right
      y -= 1
      stroke(color1, color2, color3)
      if (color1 < 255) {             //changes the colors but keeps them similar so you get a gradient rather than a bunch of randomly colored lines
        color1 += random(-2, 2)
      } else {
        color1 -= 2
      }
      if (color2 < 255) {
        color2 += random(-2, 2)
      } else {
        color2 -= 2
      }
      if (color3 < 255) {
        color3 += random(-2, 2)
      } else {
        color3 -= 2
      }
      //if (color3 > 230 && color2 > 230 && color1 > 230) {    //if you want to keep the loop by commenting out the counter, this will help prevent the lines from only being black.
        //color1-=100
        //color2-=100
        //color3-=100
      //}

      line(y, x, 0, 800)         //this does the lines from the bottom left
    }
    translate(width / 2, height); // Starts generation in bottom center
    main(size, 3*PI/2, 0, 0);    //Draws a main, inside the if loop so that only one main is drawn
    counter++                    //break the loop, can be commented out to keep drawing it
  }
}


function main(size, angle, x, y) { //main group of lines

  if (size > 5) {                        //stops this from going on infinitely
    stroke(color1,color2,color3,150);
    
    if (color1 < 255) {
        color1 += random(-5, 5)
      } else {
        color1 -= 5
      }
      if (color2 < 255) {
        color2 += random(-5, 5)
      } else {
        color2 -= 5
      }
      if (color3 < 255) {
        color3 += random(-5, 5)
      } else {
        color3 -= 5
      }

    var i = random(0, 100);


    if (i < 90) {
      line(x, y, 0,10);
      var x2 = x + cos(angle) * size;
      var y2 = y + sin(angle) * size;
      main(size * 0.99, angle - angle1, x2, y2);  //using recursion to draw more lines
    }

    else { //10 percent chance for the main line to grow 2 branches
      line(x, y, 0,10);
      var x2 = x + cos(angle);
      var y2 = y + sin(angle);
      branch(size * 0.99, angle + angle1, x2, y2); 
      main(size * 0.6, angle - angle1, x2, y2);
      branch(size * 0.5, angle + angle2, x2, y2);
    }
  }
}


function branch(size, angle, x, y) {  //branches off the main lines, which create the cool line curves

  if (size > 3) {
    
    if (color1 < 255) {
        color1 += random(-5, 5)
      } else {
        color1 -= 5
      }
      if (color2 < 255) {
        color2 += random(-5, 5)
      } else {
        color2 -= 5
      }
      if (color3 < 255) {
        color3 += random(-5, 5)
      } else {
        color3 -= 5
      }

    var i = random(0, 100);

    if (i < 90) {
      line(x,y, 0,10);
      var x2 = x + cos(angle) * size;
      var y2 = y + sin(angle) * size;
      branch(size * 0.99, angle + angle1, x2, y2);
    }

    else {  //another 10 percent chance for it to branch again
      line(x,y, 0,10);
      var x2 = x + cos(angle);
      var y2 = y + sin(angle);
      main(size * 0.99, angle + angle1, x2, y2);
      branch(size * 0.6, angle + angle2, x2, y2);
      main(size * 0.5, angle - angle2, x2, y2);
    }
  }
}