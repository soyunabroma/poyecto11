var shipimg , ship
var sea, seaimg
function preload(){
seaimg = loadImage("sea.png")
shipimg = loadAnimation("ship-1.png" , "ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(300,200);
  sea.addImage(seaimg);
  sea.velocityX = -3;
  sea.scale = 0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipimg);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
  
sea.velocityX = -3;

  drawSprites(); 
}