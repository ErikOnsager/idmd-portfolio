let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB; //Creating variables for later

function setup() {
	createCanvas(1500, 800); //Large canvas

	noStroke();

	phase = 2; //Variables to control the animation
	speed = 0.07;
	maxCircleSize = 20;

	numRows = 10; //Variables to control the numbers of rows, strands, etc.
	numCols = 50;
	numStrands = 5;

	colorA = color(0, 150, 150); //Setting the two colors
	colorB = color(0, 100, 200);
}

function draw() {
	background(4, 58, 74); //background color

	for(let strand = 0; strand < numStrands; strand += 1) {  //three for loops so that variables can control the # of strands, cols, and rows
		for(let col = 0; col < numCols; col += 1) {
			for(let row = 0; row < numRows; row += 1) {
				
				let strandPhase = 10+phase + map(strand, 0, numStrands, 0, TWO_PI); //tracks each phase of the wave that the function is going through
				
				let colOffset = map(col, 0, numCols, 10, TWO_PI); //offsetting each successive column to create a wave effect
				let x = map(col, 0, numCols, 50, width+10);       //mapping horizontally
				let y = height/2  + sin(strandPhase + colOffset) * 50;    //mapping vertically
				
				let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1)*3; //making the ellipses change size as they go up and down
				
				let circleSize = sizeOffset * maxCircleSize; //again, making the ellipses change size based on the variable maxCircleSize

				fill(lerpColor(colorA, colorB, row / numRows));    //Making the ellipses change color as they go
				ellipse(x*2-200, y*8-2800, 20, circleSize);   //drawing the ellipses
			}
		}
	}

	phase = frameCount * speed; //making everything move, modified by a speed variable
}
