var position=0;
var speed = 3;
var x = 0;
var y = 0;
var fall = 0;
var snow = 3;
var SnowX=15;
var SnowY=15;


function setup() {
  createCanvas(1000,600);
  background(175,238,238);
}


 

function elf (x) {
 //face
  fill(255,222,173);
  strokeWeight(0);
  ellipse(x + 300,425,275,300);
  //neck
  fill(255,222,173);
  stroke(0);
  rect(x + 237,500,125,200);
  //ears
  fill(255,222,173);
  ellipse(x + 160,425,25,45);
  ellipse(x + 440,425,25,45);
  
  //eyes
  fill(255,255,255);
  stroke(0);
  ellipse(x + 250,420,40,45);
  ellipse(x + 350,420,40,45);
  //pupil
  fill(0,191,255);
  stroke(0);
  ellipse(x + 250,420,30,30);
  ellipse(x + 350,420,30,30);
  fill(0,0,0);
  ellipse(x + 250,420,20,20);
  ellipse(x + 350,420,20,20);
  fill(255,222,173);
  stroke(0);
  ellipse(x + 250,445,50,45);
  ellipse(x + 350,445,50,45);
  //hair
  fill(255,165,0);
  ellipse(x + 180,375,50,50);
  ellipse(x + 210,375,50,50);
  ellipse(x + 240,375,50,50); 
  ellipse(x + 270,375,50,50);
  ellipse(x + 300,375,50,50) ;
  ellipse(x + 330,375,50,50) ;
  ellipse(x + 360,375,50,50) ;
  ellipse(x + 390,375,50,50) ;
  ellipse(x + 420,375,50,50);
  //hat green
  fill(46,139,87);
  stroke(0);
  rect(x + 152,300,295,75);
  //hat red
  fill(255,0,0);
  stroke(0);
  triangle(x + 161,300,x + 440,300,x + 240,100);
  triangle(x + 240,100,x + 240,180,x + 120,200);
  //pom
  fill(255,255,255);
  stroke(0);
  ellipse(x + 120,200,50,50);
  //nose
  fill(255,228,225);
  stroke(0);
  //mouth
  fill(0,0,0);
  stroke(0);
  ellipse(x + 300,495,75,90);
  fill(255,192,203);
  ellipse(x + 300,505,35,70);
  fill(255,255,255);
  ellipse(x + 300,485,75,60);
  fill(255,222,173);
  ellipse(x + 300,465,90,60);
  //nose
  fill(255,228,225);
  stroke(0);
  ellipse(x + 300,450,30,20);
  //freckles
  fill(255,192,203);
  ellipse(x + 240,460,50,50);
  ellipse(x + 360,460,50,50);
  //shirt
  fill(148,0,211);
  rect(x + 222,575,150,75);
}


 
function draw (){
  background(175,238,238);
    elf(position-200);
      if (position > 800 || position < 0) {
       speed = speed * -1;
}
  
  
snowflake(fall);
  
  
position = position + speed;

fill(255,255,255);
ellipse(SnowX,SnowY,15,15);

for (var i = 0; i < 1001; i +=50) {
  var snowFlakeSize = random(15,18);
    ellipse(SnowX + i, SnowY + random(20, 400), snowFlakeSize, snowFlakeSize);

}
}

function snowflake(){
  x=random (0,width);
  y=random (0,height);
  fill(255);
  ellipse(x,y,15,15);
}
  
  


