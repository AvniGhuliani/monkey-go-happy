
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)

   
  monkey = createSprite(50,350,20,50);
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey.scale=0.15
  
 
  
   ground = createSprite(100,355,600,20);
  
  
  
  
}


function draw() {
  background("white")
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
   
     obstaclesGroup = new Group();  
  spawnObstacles();
 
  bananaGroup=new Group();
  spawnBanana();
  
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  var  survivalTime=0
  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+score,500,50 )
   
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.round(frameCount%300)
  text("survivalTime:"+survivalTime,100,50 )
  
drawSprites();
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
     obstacles = createSprite(600,325,40,10);
      obstacles.x = Math.round(random(100,300));
      obstacles.addImage( obstacleImage);
      obstacles.scale = 0.15
      obstacles.velocityX = -3;
    
    
     //assign lifetime to the variable
      obstacles.lifetime = 134;
    
    //adjust the depth
     obstacles.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
  
  }
}
function spawnBanana() {
  if (frameCount % 80 === 0) {
   banana = createSprite(200,100,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.12;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}
    



