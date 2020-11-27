var bullets,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullets=createSprite(50, 200, 50, 10);
  wall=createSprite(500,200,thickness,height/2)
  bullets.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullets.x<(bullets.width+wall.width)/2)
  {
    bullets.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
        wall.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      wall.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}