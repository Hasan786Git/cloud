  function preload(){
    cloudImage=loadImage("cloud.png");
  }
  function setup(){
    createCanvas(400,400);
    cloud=createSprite(200,200,20,20);
cloud.addImage(cloudImage);
  }
  function draw(){
    background("black");
    drawSprites();
  }
