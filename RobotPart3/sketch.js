  var PosX = [50,50, 50,50,50];
  var PosY = [50,50, 50,50,50];


function setup() {
  createCanvas(900, 800);
  fill(255,0,0);
}

function drawrobot(var1,var2, a, b){    //a is just a variable for tracking the position in the array. b controls what movement the robot does
  var XDistance = (mouseX+var1) - PosX[a];
  var XSpeed = (XDistance/10);
  var YDistance = (mouseY+var2) - PosY[a];
  var YSpeed = (YDistance/10);
  
  if (abs(XSpeed) > abs(YSpeed) && XSpeed>0){
    if (b==0){PosY[a]+=2*sin(mouseX)}
    if (b==0){PosX[a]+=2*cos(mouseX)}
    ellipse(PosX[a]+30,PosY[a],60*sin((b-2)*(PosX[a]/30)),60);
    rect(PosX[a],PosY[a],50,100);
    ellipse(PosX[a]+50,PosY[a]-12,10,10);
    
    rect(PosX[a]+20,PosY[a]+95+b*(b-1)*random(-3,3),20,20);
    rect(PosX[a]+30,PosY[a]+95+b*(b-1)*random(-3,3),20,20);
    line(PosX[a]+45+3*b*sin(mouseX),PosY[a]+60,PosX[a]+45,PosY[a]+10);
  }
  else if (abs(XSpeed) > abs(YSpeed) && XSpeed<0){
    if (b==0){PosY[a]+=2*sin(mouseX)}
    if (b==0){PosX[a]+=2*cos(mouseX)}
    ellipse(PosX[a]+30,PosY[a],60*sin((b-2)*(PosX[a]/30)),60);
    rect(PosX[a]+10,PosY[a],50,100);
    ellipse(PosX[a]+10,PosY[a]-12,10,10);
    rect(PosX[a]+20,PosY[a]+95+b*(b-1)*random(-3,3),20,20);
    rect(PosX[a]+10,PosY[a]+95+b*(b-1)*random(-3,3),20,20);
    line(PosX[a]+20+3*b*sin(mouseX),PosY[a]+60,PosX[a]+20,PosY[a]+10);
  }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed>0){
    if (b==0){PosY[a]+=2*sin(mouseX)}
    if (b==0){PosX[a]+=2*cos(mouseX)}
    ellipse(PosX[a]+30,PosY[a],60,60);
    rect(PosX[a],PosY[a],60,100);
    line(PosX[a],PosY[a],PosX[a]+20,PosY[a]-10);
    line(PosX[a]+60,PosY[a],PosX[a]+45,PosY[a]-10);
    line(PosX[a]-40,PosY[a]+60,PosX[a],PosY[a]+10);
    line(PosX[a]+90,PosY[a]+60,PosX[a]+60,PosY[a]+10);
    ellipse(PosX[a]+20,PosY[a]-12,10,10);
    ellipse(PosX[a]+40,PosY[a]-12,10,10);
    rect(PosX[a]+10,PosY[a]+95+b*(b-1)*random(-3,3),10,20);
    rect(PosX[a]+40,PosY[a]+95+b*(b-1)*random(-3,3),10,20);
    }
  else if (abs(YSpeed) > abs(XSpeed) && YSpeed<0)   {
    if (b==0){PosY[a]+=2*sin(mouseX)}
    if (b==0){PosX[a]+=2*cos(mouseX)}
    ellipse(PosX[a]+30,PosY[a],60,60);
    rect(PosX[a],PosY[a],60,100);
    line(PosX[a]-40,PosY[a]+60,PosX[a],PosY[a]+10);
    line(PosX[a]+90,PosY[a]+60,PosX[a]+60,PosY[a]+10);
    rect(PosX[a]+10,PosY[a]+95+b*(b-1)*random(-3,3),10,20);
    rect(PosX[a]+40,PosY[a]+95+b*(b-1)*random(-3,3),10,20);
  }
    PosX[a]+=XSpeed;
  PosY[a]+=YSpeed;
}

function draw() {

  drawrobot(100,-100, 0, 0);
  drawrobot(0,0,1, 1);
  drawrobot(-100,-100,2, 1);
  drawrobot(100,100,3, 0);
  drawrobot(-100,100,4, 2);
  
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
  background([0, 100, 100, 7]);
}
