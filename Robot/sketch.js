  var PosX = 50;
  var PosY = 50;

function setup() {
  createCanvas(900, 800);
  fill(255,0,0);
}

function draw() {
  var XDistance = mouseX - PosX;
  var XSpeed = (XDistance/10);
  var YDistance = mouseY - PosY;
  var YSpeed = (YDistance/10);
  
  if (abs(XSpeed) > abs(YSpeed) && XSpeed>0){
    ellipse(PosX+30,PosY,60,60);
    rect(PosX,PosY,50,100);
    ellipse(PosX+50,PosY-12,10,10);
    rect(PosX+20,PosY+95,20,20);
    rect(PosX+30,PosY+95,20,20);
    line(PosX+45,PosY+60,PosX+45,PosY+10);
  }
  else if (abs(XSpeed) > abs(YSpeed) && XSpeed<0){
    ellipse(PosX+30,PosY,60,60);
    rect(PosX+10,PosY,50,100);
    ellipse(PosX+10,PosY-12,10,10);
    rect(PosX+20,PosY+95,20,20);
    rect(PosX+10,PosY+95,20,20);
    line(PosX+20,PosY+60,PosX+20,PosY+10);
  }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed>0){
    ellipse(PosX+30,PosY,60,60);
    rect(PosX,PosY,60,100);
    line(PosX,PosY,PosX+20,PosY-10);
    line(PosX+60,PosY,PosX+45,PosY-10);
    line(PosX-40,PosY+60,PosX,PosY+10);
    line(PosX+90,PosY+60,PosX+60,PosY+10);
    ellipse(PosX+20,PosY-12,10,10);
    ellipse(PosX+40,PosY-12,10,10);
    rect(PosX+10,PosY+95,10,20);
    rect(PosX+40,PosY+95,10,20);
    }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed<0)   {
    ellipse(PosX+30,PosY,60,60);
    rect(PosX,PosY,60,100);
    line(PosX-40,PosY+60,PosX,PosY+10);
    line(PosX+90,PosY+60,PosX+60,PosY+10);
    rect(PosX+10,PosY+95,10,20);
    rect(PosX+40,PosY+95,10,20);
  }
  
  PosX+=XSpeed;
  PosY+=YSpeed;
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
}