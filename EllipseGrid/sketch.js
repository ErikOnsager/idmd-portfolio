function setup() {
  createCanvas(700, 700);
  widthvar = (width/100)
  heightvar = (height/100)
}

function draw() {
  background([0, 100, 100, 7]);     //writing background color
  
  for (var b=0; b<widthvar; ++b)           //creating an ellipse for an x&y grid
  {
  	for (z=0; z<heightvar; ++z)
  	{
      fill ([z*20+b*10, 0, 100, 9]);     //writing color for each ball
    	ellipse(z*100+50, b*100+50, 100, 100);
  	}
  }
}
