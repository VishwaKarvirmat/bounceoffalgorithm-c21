var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite (600,200,50,100);
  movingRect = createSprite(600,800,100,50);

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue"
  movingRect.velocityY = -5
  fixedRect.velocityY = +5
}

function draw() {
  background(0);  

  if(fixedRect.width/2 + movingRect.width/2 > movingRect.x - fixedRect.x && 
    fixedRect.width/2 + movingRect.width/2 > fixedRect.x - movingRect.x){
movingRect.velocityX = movingRect.velocityX*(-1);
fixedRect.velocityX = fixedRect.velocityX*(-1);

    }
     
    if(
    fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y && 
      fixedRect.height/2 + movingRect.height/2 > fixedRect.y - movingRect.y ){
        movingRect.velocityY = movingRect.velocityY*(-1);
        fixedRect.velocityY = fixedRect.velocityY*(-1);
  }
  drawSprites();
}