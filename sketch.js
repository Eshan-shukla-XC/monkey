
var monkey , monkey_running,ground,rand
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey= createSprite(50,210,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(0,250,800,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  obstaclesGroup=new Group();
  bananaGroup=new Group();
  score=0;
  
}


function draw() {
  background(180);
text("Survival Time: "+ score, 300,50);
  score = score + Math.round(frameCount/60);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-13;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 100=== 0){
   var obstacle = createSprite(400,220,10,40);
   obstacle.velocityX = -10;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    
    obstacle.lifetime=200;
    
    obstaclesGroup.add(obstacle);
  }
}

function spawnBananas(){
  var rand = Math.round(random(120,200));
  if(frameCount%80===0){
    var banana=createSprite(400,rand,20,20);
    banana.velocityX = -10;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    
    banana.lifetime=50;
    
    bananaGroup.add(banana);
  }
}







