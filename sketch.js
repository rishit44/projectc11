var sea
var ship
var shipsailing

function preload(){ 
ship=loadAnimation("ship-1.png","ship-2.png","ship-3.png")
sea=loadImage("sea.png") 

} 
  
  function setup(){
     createCanvas(600,600); 
  
   ship=createSprite(300,300)
    ship.addAnimation=("ship")
    sea=createSprite(300,300)
  }
    function draw() {
        background(0); 
        sea.velocityX = -3; 
        //code to reset the background 
        if(sea.x < 0){ sea.x = sea.width/8; 
        }
        drawSprites();
       }
 

    
      
