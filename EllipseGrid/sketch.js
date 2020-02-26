function setup() {
  createCanvas(800, 800);
}

function draw() {
  background([0, 100, 100, 7]);     //writing background color
  
  for (var b=0; b<9; ++b)           //creating an ellipse for an x&y grid
  {
  	for (z=0; z<10; ++z)
  	{
      fill ([z*20+b*10, 0, 100, 9]);     //writing color for each ball
    	ellipse(z*100, b*100, 100, 100);
  	}
  }
}