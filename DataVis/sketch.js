//The following data represents the number of shares of Disney stock (in hundreds of shares) sold for a sample of 60 trading days

function draw() {
  createCanvas(900, 900) //large canvas
  background(100, 150, 150) //bg color
  noFill(); //making it so that you can see through the ellipses (so that big ones don't cover up a bunch)
  textSize(50); //text size
  textFont('Georgia'); //font

  var day = [12584, 9441, 18960, 21480, 10766, 13059, 8589, 4965, 4803, 7240, 10906, 8561, 6389, 14372, 18149, 6309, 13051, 12754, 10860, 9574, 19110, 29585, 21122, 14522, 17330, 18119, 10902, 29158, 16065, 10376, 10999, 17950, 15418, 12618, 16561, 8022, 9567, 9045, 8172, 13708, 11259, 10518, 9301, 5197, 11259, 10518, 9301, 5197, 6758, 7304, 7628, 14265, 13054, 15336, 14682, 27804, 16022, 24009, 32613, 19111]; //array with 60 days of data

  var largest = day[1] //counter for the largest item in the array

  for (i = 0; i < day.length; i++) { //for loop to go through every number in the array
    if (day[i] > largest) { //if the number is the biggest so far
      largest = day[i] //largest becomes that number
    }
  }

  for (i = 0; i < day.length; i++) { //again, looping through every item in the array
    day[i] /= largest //scaling each number based on the largest number (try making one of the numbers 100000)
    day[i] *= 20 //making the numbers a bit larger (currently between 0&1)
    stroke(day[i] * 10, 0, 0) //making larger numbers/ellipses a lighter shade of red
    //fill(day[i]*10,0,0,150) //if you want them to be transparent discs, use this instead.
    strokeWeight(30) //making the ellipses more than just frames so that it's easier to see
    if (i == (int(mouseX / 13.4))) { //if the mouse is over a circle
      stroke(0, 100, 0) //color that cirlce green
      //fill(0,100,0,150) //again, for transparent discs
    }
    ellipse(50 + (i * 13), 400, day[i] * 10, day[i] * 35) //drawing an ellipse based on the day & size of the number
  }


  day = [12584, 9441, 18960, 21480, 10766, 13059, 8589, 4965, 4803, 7240, 10906, 8561, 6389, 14372, 18149, 6309, 13051, 12754, 10860, 9574, 19110, 29585, 21122, 14522, 17330, 18119, 10902, 29158, 16065, 10376, 10999, 17950, 15418, 12618, 16561, 8022, 9567, 9045, 8172, 13708, 11259, 10518, 9301, 5197, 11259, 10518, 9301, 5197, 6758, 7304, 7628, 14265, 13054, 15336, 14682, 27804, 16022, 24009, 32613, 19111]; //resetting the array for the text portion
  fill(0, 0, 0) //making it so that the text shows up
  noStroke() //no border on the text
  if (mouseX < 800) { //while the mouse is inside the frame
    text(('Day ' + (1 + int(mouseX / 13.4)) + ':' + day[int(mouseX / 13.4)]), int(mouseX) / 1.29, 750) //write the day & number for that day
  }
  textSize(30) //text size for title
  text('Trading volume of DIS in hundreds of shares', 110, 50); //title
}