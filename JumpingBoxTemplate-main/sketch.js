var canvas;
var music;
var ball,sur1,sur2,sur3,sur3;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   sur1=createSprite(100,580,200,20)
   sur2=createSprite(300,580,200,20)
   sur3=createSprite(500,580,200,20)
   sur4=createSprite(700,580,200,20)
   sur1.shapeColor="red"
   sur2.shapeColor="blue"
   sur3.shapeColor="yellow"
   sur4.shapeColor="black"
  
   

    //create box sprite and give velocity
ball=createSprite(300,300,30,30)
ball.shapeColor="white"
ball.velocityX=10
ball.velocityY=-10


   



}

function draw() {
    background("pink");
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
drawSprites();
if(sur1.isTouching(ball)  && ball.bounceOff(sur1)){
    ball.shapeColor=sur1.shapeColor
    
}

if(sur2.isTouching(ball)  && ball.bounceOff(sur2)){
    ball.shapeColor=sur2.shapeColor
    ball.velocityX=0
    ball.velocityY=-0
    music.stop();

    
}

if(sur3.isTouching(ball)  && ball.bounceOff(sur3)){
    ball.shapeColor=sur3.shapeColor
   

}
if(sur4.isTouching(ball)  && ball.bounceOff(sur4)){
    ball.shapeColor=sur4.shapeColor
    music.play()
    //add condition to check if box touching surface and make it box
}
}