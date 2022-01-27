let ground;
var lander
var lander_img
var bg_img;

var vx=0
var g=0.05
var vy=5

var spaceship
var spaceship2
var spaceship3
var spaceship4
var spaceship5
var spaceship6

function preload()
{
 lander_img=loadImage("normal.png")
 bg_img=loadImage("bg_sur.png")
 lander_img=loadImage("lander.jpg")
}

function setup() {
  createCanvas(1250,700);
  
  lander=createSprite(450,300,200,300)
  lander.addImage(lander_img)
  lander.scale=0.1
  lander.setCollider("rectangle",0,0,200,200)
  rectMode(CENTER)
  textSize(15)

  ground=createSprite(100,689,2000,9)
  ground.shapeColor="black"






spaceship=createSprite(200,100,30,30)
spaceship.shapeColor='white'

spaceship2=createSprite(300,100,30,30)
spaceship2.shapeColor='white'

spaceship3=createSprite(400,100,30,30)
spaceship3.shapeColor='white'

spaceship4=createSprite(500,100,30,30)
spaceship4.shapeColor='white'

spaceship5=createSprite(600,100,30,30)
spaceship5.shapeColor='white'

spaceship6=createSprite(700,100,30,30)
spaceship6.shapeColor='white'

}

function draw() 
{
  background(51);
  image(bg_img,0,0)

  push()
  fill(255)
text("Vertical Velocity:"+round(vy),800,100)
pop()
  //fall down    
  vy+=g
  lander.position.y+=vy

  if (keyDown("UP_ARROW")){
lander.y=lander.y-9
  }
  
  drawSprites();
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    upward_thrust()
    lander.changeAnimation('thrusting')
 
  }
}
function upward_thrust(){
  vy=-1;
}

