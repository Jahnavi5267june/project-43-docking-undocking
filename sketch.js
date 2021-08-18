var spacecraft;
var iss;
var issImage,bgImage,spacecraftImage, spacecraft1Image , spacecraft2Image ,spacecraft3Image;
var hasDocked = false;

 function preload(){
  bgImage = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  spacecraft1Image = loadImage("spacecraft1.png");
  spacecraft2Image = loadImage("spacecraft2.png");
  spacecraft3Image = loadImage("spacecraft3.png");
  spacecraft4Image = loadImage("spacecraft4.png");
  

}

function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1Image);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issImage);
  iss.scale = 0.8;
}


function draw() {
  background(bgImage); 
  
    
    spacecraft.addImage(spacecraft1Image);
    if(!hasDocked){
      spacecraft.x = spacecraft.x + random(-1,1);
      
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage( spacecraft3Image);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage( spacecraft4Image);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage( spacecraft2Image);
    }
  }
    if(spacecraft.y <= (iss.y+55) && spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }
    drawSprites();
  }


