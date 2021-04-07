var car ,wall;
var speed ,weight;

function setup() {
  createCanvas(1200,800);
  car = createSprite(200,200,50,50);
  wall =createSprite(1200,200,60,100);
  car.velocityX=5;
  speed=random(25,31);
  weight =random(400,1500) 
}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x< car.width/2 + wall.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=("yellow")
      wall.shapeColor=("white")
    }
    if(deformation<180 &&  deformation>100){
      car.shapeColor=("yellow")
      wall.shapeColor("white")
    }
    if(deformation<100){
      car.shapeColor=("green")
      wall.shapeColor=("white")
    }
  }
 
drawSprites();

}