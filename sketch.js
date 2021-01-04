var tower,towerimg
var climber,climberimg,climberGroup;
var door,doorimg,doorGroup;
var ghost,ghostimg;
var ib,ibGroup;
var gameState="play"

function preload(){
  
 towerimg=loadImage("tower.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png");
  ghostimg=loadImage("ghost-standing.png");
  
  
}
function setup(){
 createCanvas (600,600);
 tower=createSprite(300,300);
 tower.addImage("tower",towerimg); 
  tower.velocityY=1;
  
  climberGroup=new Group();
  doorGroup=new Group();
  ibGroup=new Group();
  
  
  
  
  ghost=createSprite(200,200,300,300);
  ghost.scale=0.4;
  ghost.addImage("ghost",ghostimg);
  

  
  
  
  
}
function draw(){
  background(0);
  if(gameState==="play"){
    
    
  
  //for infinite scrolling of tower
  if (tower.y>400){
   tower.y=300;  
  }
 if(keyDown("left_arrow")){
   ghost.x = ghost.x - 3;
 }
  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3;
  }
  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  ghost.velocityY = ghost.velocityY + 0.8 
  
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0
    
  }
  
  if(ghost.y>600 ||ibGroup.isTouching(ghost)){
    ghost.destroy();
    gameState="end"
  }
  
  
  
  
  
  
  
 spawndoor();
  
  
  
  drawSprites();
}
if (gameState === "end"){
  stroke("yellow");
  fill("yellow"); 
  textSize(30); 
  text("Game Over", 230,250) 
}  
}

function spawndoor() {
  //write code here to spawn the doors
  if (frameCount % 250 === 0) {
    var door = createSprite(200,-50,40,10);
    door.x = Math.round(random(120,400));
    door.addImage(doorimg);
    door.scale = 0.8;
   door.velocityY = 1;
    
    var climber=createSprite(200,10);
    climber.addImage(climberimg);
    climber.x=door.x
    climber.velocityY=1;
    
     //assign lifetime to the variable
    door.lifetime = 800;
    climber.lifetime=800;
    
    //adjust the depth
    ghost.depth = door.depth;
   ghost.depth = ghost.depth + 1;
    
    //add each cloud to the group
    doorGroup.add(door);
    climberGroup.add(climber);
    
    var ib=createSprite(200,15)
    ib.width=climber.width
    ib.height=2;
    ib.x=door.x
    ib.velocityY=1;
    ib.debug=true;
    ibGroup.add(ib);
    
  }
  
}



