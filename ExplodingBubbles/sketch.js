var time1 = 2000;
var time2 = 4000;
var counter = 0;
var xarray = [];
var yarray = [];
var col1array = [];
var col2array = [];
var col3array = [];
var fxncounter = 0;


function setup() {
  createCanvas(700,700);
    background(204);
}


function draw() {
  var currentTime = millis();
  textSize(20);
  
  
  if ((int((currentTime-fxncounter)/2000))==counter && counter<=15){
    posx=random(50,width-50)
    posy=random(50,height-50)
    ellipse(posx,posy,50,50)
    col1=random(255)
    col2=random(255)
    col3=random(255)
    fill(col1,col2,col3)
    counter+=1
    text((counter-1)*2,posx-10,posy+5)
    append(xarray,posx)
    append(yarray,posy)
    append(col1array, col1)
    append(col2array, col2)
    append(col3array, col3)

  }
  
  else if (30<=(counter-1)*2 && (counter-1)*2<50){
    background(204);
   for(z=0;z<16;z+=1){
     fill(col1array[z],col2array[z],col3array[z])
      rand1=random(-10,10)
     rand2=random(-10,10)
     ellipse(xarray[z]+rand1,yarray[z]+rand2,50,50)
   }
    if (int((currentTime-fxncounter)/2000)==counter){
    counter++
  }
  }
  
  
  else if (50<=(counter-1)*2 && (counter-1)*2<=70){
    textSize(50)
    background(204)
    line(width-80, height, width-80, height-80)
    line(width-80, height-80, width, height-80)
    fill(0)
    text(35-counter,width-50,height-40)
    for(z=0;z<16;z+=1){
     fill(col1array[z],col2array[z],col3array[z])
     ellipse(xarray[z],yarray[z],50,50)
    }
    if (int(((currentTime-fxncounter)-25000)/1000)==counter){
    counter++
    }
  }
   if(counter==35){ //35 here because we incremented it once every 2 seconds for 50 seconds (25) then once every second for 10 seconds(35)
     background(204);
     counter=0;
     fxncounter+=60000;
   }
  
}