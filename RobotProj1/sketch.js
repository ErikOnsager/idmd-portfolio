  var PosX = 50;
  var PosY = 50;

function setup() {
  createCanvas(900, 800);
  fill(255,0,0);
}

function drawrobot(var1,var2){
  var XDistance = (mouseX+var1) - PosX;
  var XSpeed = (XDistance/10);
  var YDistance = (mouseY+var2) - PosY;
  var YSpeed = (YDistance/10);
  
  if (abs(XSpeed) > abs(YSpeed) && XSpeed>0){
    PosY+=random(-1,1)
    ellipse(PosX+30,PosY,60*sin(PosX/30),60);
    rect(PosX,PosY,50,100);
    ellipse(PosX+50,PosY-12,10,10);
    
    rect(PosX+20,PosY+95+random(-3,3),20,20);
    rect(PosX+30,PosY+95+random(-3,3),20,20);
    line(PosX+45,PosY+60,PosX+45,PosY+10);
  }
  else if (abs(XSpeed) > abs(YSpeed) && XSpeed<0){
    PosY+=random(-1,1)
    ellipse(PosX+30,PosY,60*sin(PosX/30),60);
    rect(PosX+10,PosY,50,100);
    ellipse(PosX+10,PosY-12,10,10);
    rect(PosX+20,PosY+95+random(-3,3),20,20);
    rect(PosX+10,PosY+95+random(-3,3),20,20);
    line(PosX+20,PosY+60,PosX+20,PosY+10);
  }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed>0){
    PosY+=random(-1,1)
    ellipse(PosX+30,PosY,60,60);
    rect(PosX,PosY,60,100);
    line(PosX,PosY,PosX+20,PosY-10);
    line(PosX+60,PosY,PosX+45,PosY-10);
    line(PosX-40,PosY+60,PosX,PosY+10);
    line(PosX+90,PosY+60,PosX+60,PosY+10);
    ellipse(PosX+20,PosY-12,10,10);
    ellipse(PosX+40,PosY-12,10,10);
    rect(PosX+10,PosY+95+random(-3,3),10,20);
    rect(PosX+40,PosY+95+random(-3,3),10,20);
    }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed<0)   {
    PosY+=random(-1,1)
    ellipse(PosX+30,PosY,60,60);
    rect(PosX,PosY,60,100);
    line(PosX-40,PosY+60,PosX,PosY+10);
    line(PosX+90,PosY+60,PosX+60,PosY+10);
    rect(PosX+10,PosY+95+random(-3,3),10,20);
    rect(PosX+40,PosY+95+random(-3,3),10,20);
  }
    PosX+=XSpeed;
  PosY+=YSpeed;
}

function draw() {

  drawrobot(100,100);
  
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
}