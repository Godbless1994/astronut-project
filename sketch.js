var bath, bathImg;
var brushImg, brush;
var bg, bgImg;
var eat, eatImg;
var sleep, sleepImg;
var gym2, gym2Img;
var gym, gymImg ;

function preload(){
bgImg = loadImage("iss.png");
bathImg = loadAnimation("bath1.png", "bath2.png");
eatImg = loadAnimation("eat1.png", "eat2.png");
gymImg = loadAnimation("gym1.png", "gym2.png");
gym2Img = loadAnimation("gym11.png", "gym12.png");
sleepImg = loadImage("sleep.png");
brushImg = loadImage("brush.png");

}

function setup() {
  createCanvas(800,1000);
  bg = createSprite(400,400);
  bg.addImage("bg", bgImg);
  
  sleep = createSprite(300,270);
  sleep.addImage("sleeping", sleepImg);
  sleep.scale = 0.1
 
 

}

function draw() {
  background("white"); 
  
  if (gameState = "play") {
    text("keyDown=gym,keyUp=brush,keySpace=gym2,keyLeft=bath,keyRight=eat", 300,200);
    text.scale = 0.3;
  }

  if(keyDown("up")){
   brush = createSprite(80,400);
    brush.addImage("brushing", brushImg);
    brush.scale = 0.1;
    brush.y = 350;
    brush.velocityX = 0;
    brush.velocityY = 0;
    }
 
    if(keyDown("down")){
   gym = createSprite(700,800);
   gym.addAnimation("gyming", gymImg);
   gym.scale=0.1;
   gym.y = 350;
   gym.velocityX = 0;
   gym.velocityY = 0;
    }

    if(keyDown("left")){
      bath = createSprite(180,400);
      bath.addAnimation("bathing", bathImg);
      bath.scale = 0.1;
      bath.y = 350;
      bath.velocityX = 0;
      bath.velocityY = 0;
    }

    if(keyDown("right")){
    eat = createSprite(400,100);
    eat.addAnimation("eating", eatImg);
    eat.scale = 0.1;
    eat.y = 350;
    eat.velocityX = 0;
    eat.velocityY = 0;
    }

    if(keyDown("space")){
    gym2 = createSprite(500,100);
    gym2.addAnimation("gyming", gym2Img);
    gym2.scale = 0.1;
    gym2.y = 350;
    gym2.velocityX = 0;
    gym2.veloctyY = 0;
    }
  
  drawSprites();
}