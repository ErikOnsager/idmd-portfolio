let page = 0;
PosX = 200;
PosY = 610;
Ydir = 1;

function setup() {
  createCanvas(900, 800);
  background(255,0,0)
}

function draw() {
  
  background(255,0,0)
  if (page == 0) {
     eyeDirection = 220+((mouseX-500)/35);
 } else {
    if(PosY>550&&Ydir==1){
     PosY-=2
    }
   else{
     PosY+=2
     Ydir=0
   }
   if(PosY==608){
     Ydir=1
   }
 }
  
    ellipse(PosX+20,PosY-10,60,60);
    rect(PosX-10,PosY,60,110);
    rect(PosX-10,PosY,60,50);
    rect(PosX-15,PosY+10,70,40);
    rect(PosX-20,PosY+20,80,30);
    rect(PosX-25,PosY+30,90,20);
    rect(PosX-30,PosY+40,100,10);
    ellipse(eyeDirection,PosY-12,10,10);
    rect(PosX,PosY+95,10,100);
    rect(PosX+30,PosY+95,10,100);

  }

function mousePressed() {
  if (page === 0) {
    page = 1;
  } else {
    page = 0;
  }
}