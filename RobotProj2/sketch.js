  var PosX = [50,50, 50,50,50];
  var PosY = [50,50, 50,50,50];


function setup() {
  createCanvas(900, 800);
  fill(255,0,0);
}

function drawrobot(var1,var2, arraypos){
  var XDistance = (mouseX+var1) - PosX[arraypos];
  var XSpeed = (XDistance/10);
  var YDistance = (mouseY+var2) - PosY[arraypos];
  var YSpeed = (YDistance/10);
  
  if (abs(XSpeed) > abs(YSpeed) && XSpeed>0){
    PosY[arraypos]+=random(-1,1)
    ellipse(PosX[arraypos]+30,PosY[arraypos],60*sin(PosX[arraypos]/30),60);
    rect(PosX[arraypos],PosY[arraypos],50,100);
    ellipse(PosX[arraypos]+50,PosY[arraypos]-12,10,10);
    
    rect(PosX[arraypos]+20,PosY[arraypos]+95+random(-3,3),20,20);
    rect(PosX[arraypos]+30,PosY[arraypos]+95+random(-3,3),20,20);
    line(PosX[arraypos]+45,PosY[arraypos]+60,PosX[arraypos]+45,PosY[arraypos]+10);
  }
  else if (abs(XSpeed) > abs(YSpeed) && XSpeed<0){
    PosY[arraypos]+=random(-1,1)
    ellipse(PosX[arraypos]+30,PosY[arraypos],60*sin(PosX[arraypos]/30),60);
    rect(PosX[arraypos]+10,PosY[arraypos],50,100);
    ellipse(PosX[arraypos]+10,PosY[arraypos]-12,10,10);
    rect(PosX[arraypos]+20,PosY[arraypos]+95+random(-3,3),20,20);
    rect(PosX[arraypos]+10,PosY[arraypos]+95+random(-3,3),20,20);
    line(PosX[arraypos]+20,PosY[arraypos]+60,PosX[arraypos]+20,PosY[arraypos]+10);
  }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed>0){
    PosY[arraypos]+=random(-1,1)
    ellipse(PosX[arraypos]+30,PosY[arraypos],60,60);
    rect(PosX[arraypos],PosY[arraypos],60,100);
    line(PosX[arraypos],PosY[arraypos],PosX[arraypos]+20,PosY[arraypos]-10);
    line(PosX[arraypos]+60,PosY[arraypos],PosX[arraypos]+45,PosY[arraypos]-10);
    line(PosX[arraypos]-40,PosY[arraypos]+60,PosX[arraypos],PosY[arraypos]+10);
    line(PosX[arraypos]+90,PosY[arraypos]+60,PosX[arraypos]+60,PosY[arraypos]+10);
    ellipse(PosX[arraypos]+20,PosY[arraypos]-12,10,10);
    ellipse(PosX[arraypos]+40,PosY[arraypos]-12,10,10);
    rect(PosX[arraypos]+10,PosY[arraypos]+95+random(-3,3),10,20);
    rect(PosX[arraypos]+40,PosY[arraypos]+95+random(-3,3),10,20);
    }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed<0)   {
    PosY[arraypos]+=random(-1,1)
    ellipse(PosX[arraypos]+30,PosY[arraypos],60,60);
    rect(PosX[arraypos],PosY[arraypos],60,100);
    line(PosX[arraypos]-40,PosY[arraypos]+60,PosX[arraypos],PosY[arraypos]+10);
    line(PosX[arraypos]+90,PosY[arraypos]+60,PosX[arraypos]+60,PosY[arraypos]+10);
    rect(PosX[arraypos]+10,PosY[arraypos]+95+random(-3,3),10,20);
    rect(PosX[arraypos]+40,PosY[arraypos]+95+random(-3,3),10,20);
  }
    PosX[arraypos]+=XSpeed;
  PosY[arraypos]+=YSpeed;
}

function draw() {

  drawrobot(100,-100, 0);
  drawrobot(0,0,1);
  drawrobot(-100,-100,2);
  drawrobot(100,100,3);
  drawrobot(-100,100,4);
  
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
}