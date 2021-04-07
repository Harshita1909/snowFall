var bg,bgImage;
var snow,snowGroup,snowImage;

function preload(){
bgImage=loadImage("snow3.jpg")
snowImage=loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
  bg=createSprite(400,200,800,400);
  bg.addImage(bgImage);

  snowGroup = createGroup();
}

function draw() {
  background(255,255,255);  
snowFall();
  drawSprites();
}
function snowFall(){
  if(World.frameCount%80==0){
    snow=createSprite(300,0,10,10);
    snow.addImage(snowImage);
    snow.y=Math.round(random(10,600));
    snow.x=Math.round(random(10,600));
    snow.scale=0.1;
    snow.velocityY=4;
    snow.lifetime=300;
    snowGroup.add(snow);
}
}