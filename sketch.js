var ball,paddleY;
var ball_ld,paddle_ld;


function preload() {
  ball_ld=loadImage("ball.png");
  paddle_ld=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
  ball=createSprite(100,200,30,30);
  ball.velocityX=7;
  ball.addImage("ball1",ball_ld);
  
  
  paddleY=createSprite(350,200,30,40);
  paddleY.addImage("player",paddle_ld);
  paddleY.velocityY = 0;
    
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddleY)
  paddleY.bounceOff(edges[2]);
  paddleY.bounceOff(edges[3]);
  
  randomVelocity();
  
  if(keyIsPressed) {
   if(keyCode == UP_ARROW){
    paddleY.velocityY = -5;
    }
   if(keyCode == DOWN_ARROW){
    paddleY.velocityY =  5;
    }
  }   
  
 drawSprites();
}


function randomVelocity()
{
  ball.velocityY = random(-3,4);
}


