var img;

function preload(){
  img=loadImage("art2.jpg");
}
  
function setup(){
  createCanvas(1000,334);
   background(255);
  image(img,500,0);
}

function draw(){
  frameRate(1);
  strokeWeight(random(2));
  stroke(random(255),random(255),random(255));
  line(random(0,500),random(0,height), random(0,500),random(0,height));
}
function mousePressed(){
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(mouseX,mouseY, random(20,100),random(20,100));
}
