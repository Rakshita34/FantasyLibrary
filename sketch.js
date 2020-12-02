var movingRect, fixedRect;
var box1, box2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300, 100, 50, 70);
  movingRect = createSprite(600, 300, 60,40);
 box1 =  createSprite(500,200,69,50);
 box2 = createSprite(150,250,40,194);

  fixedRect.shapeColor ="green";
  movingRect.shapeColor = "green"; 
  box1.shapeColor = "green";
  box2.shapeColor = "green";

  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;
  fixedRect.velocityY = 2;
  movingRect.velocityY = -2;

}

function draw() {
  background(255,255,255);  
  //movingRect.x = World.mouseX;
  //movingRect.y=World.mouseY;

 if(isTouching(movingRect, box1)){
  box1.shapeColor ="blue";
  movingRect.shapeColor = "blue";

 }
else{
  box1.shapeColor ="green";
  movingRect.shapeColor = "green";
  bounce(movingRect,fixedRect);
  

}
if(isTouching(movingRect, box2)){
  box2.shapeColor ="blue";
  movingRect.shapeColor = "blue";

 }
else{
  box2.shapeColor ="green";
  movingRect.shapeColor = "green";
  

}

  drawSprites();
}

