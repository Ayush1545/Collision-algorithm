var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
  movingRect=createSprite(200,100,50,50);
  movingRect.shapeColor="red";
}

function draw() {
  background(0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
        movingRect.shapeColor="white";
        fixedRect.shapeColor="white";
  }else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  drawSprites();
}