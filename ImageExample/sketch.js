var img;
var imgWidth = 800; //Variables to change in case the image has a different aspect ratio
var aspect = .5;

function preload() {
  bg = loadImage("Dreams.png"); //Loading the image
}

function setup() {
  createCanvas(800, 800);
}

function draw() {

}

function mousePressed() { //When the mouse is pressed, draw the image at that location
  background(255);
  image(bg, mouseX, mouseY, imgWidth, imgWidth * aspect); 
}
