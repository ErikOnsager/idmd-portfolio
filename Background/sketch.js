function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (var b=0; b<9; ++b)
  {
  	for (z=0; z<10; ++z)
  	{
      fill ([z*20+b*10, 0, 100, 9]);     //writing color for each ball
    	ellipse(z*100, b*100, 250, 250);
  	}
  }
}