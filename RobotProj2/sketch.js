  var PosX = [50,50, 50,50,50];
  var PosY = [50,50, 50,50,50];


function setup() {
  createCanvas(900, 800);
  fill(255,0,0);
}

function drawrobot(var1,var2, a){    //a is just a variable for tracking the position in the array.
  var XDistance = (mouseX+var1) - PosX[a];
  var XSpeed = (XDistance/10);
  var YDistance = (mouseY+var2) - PosY[a];
  var YSpeed = (YDistance/10);
  
  if (abs(XSpeed) > abs(YSpeed) && XSpeed>0){
    PosY[a]+=random(-1,1)
    ellipse(PosX[a]+30,PosY[a],60*sin(PosX[a]/30),60);
    rect(PosX[a],PosY[a],50,100);
    ellipse(PosX[a]+50,PosY[a]-12,10,10);
    
    rect(PosX[a]+20,PosY[a]+95+random(-3,3),20,20);
    rect(PosX[a]+30,PosY[a]+95+random(-3,3),20,20);
    line(PosX[a]+45,PosY[a]+60,PosX[a]+45,PosY[a]+10);
  }
  else if (abs(XSpeed) > abs(YSpeed) && XSpeed<0){
    PosY[a]+=random(-1,1)
    ellipse(PosX[a]+30,PosY[a],60*sin(PosX[a]/30),60);
    rect(PosX[a]+10,PosY[a],50,100);
    ellipse(PosX[a]+10,PosY[a]-12,10,10);
    rect(PosX[a]+20,PosY[a]+95+random(-3,3),20,20);
    rect(PosX[a]+10,PosY[a]+95+random(-3,3),20,20);
    line(PosX[a]+20,PosY[a]+60,PosX[a]+20,PosY[a]+10);
  }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed>0){
    PosY[a]+=random(-1,1)
    ellipse(PosX[a]+30,PosY[a],60,60);
    rect(PosX[a],PosY[a],60,100);
    line(PosX[a],PosY[a],PosX[a]+20,PosY[a]-10);
    line(PosX[a]+60,PosY[a],PosX[a]+45,PosY[a]-10);
    line(PosX[a]-40,PosY[a]+60,PosX[a],PosY[a]+10);
    line(PosX[a]+90,PosY[a]+60,PosX[a]+60,PosY[a]+10);
    ellipse(PosX[a]+20,PosY[a]-12,10,10);
    ellipse(PosX[a]+40,PosY[a]-12,10,10);
    rect(PosX[a]+10,PosY[a]+95+random(-3,3),10,20);
    rect(PosX[a]+40,PosY[a]+95+random(-3,3),10,20);
    }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed<0)   {
    PosY[a]+=random(-1,1)
    ellipse(PosX[a]+30,PosY[a],60,60);
    rect(PosX[a],PosY[a],60,100);
    line(PosX[a]-40,PosY[a]+60,PosX[a],PosY[a]+10);
    line(PosX[a]+90,PosY[a]+60,PosX[a]+60,PosY[a]+10);
    rect(PosX[a]+10,PosY[a]+95+random(-3,3),10,20);
    rect(PosX[a]+40,PosY[a]+95+random(-3,3),10,20);
  }
    PosX[a]+=XSpeed;
  PosY[a]+=YSpeed;
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
