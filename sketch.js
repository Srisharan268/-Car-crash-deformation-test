var car,wall,speed,weight,deformation;
/*var car_image,car_image_g,car_image_y,car_image_r,wall_image;

function preload()  {

car_image=loadImage("car_grey.png");
car_image_g=loadImage("car_green.png");
car_image_y=loadImage("car_yellow.png");
car_image_r=loadImage("car_red.png");

wall_image=loadImage("wall.png");

}*/

function setup() {
  createCanvas(1600,400);

  car=createSprite(50, 200, 50, 50);
  //car.addImage(car_image);
  car.shapeColor="grey";

  wall=createSprite(1500,200,49,height/2);
  //wall.addImage(wall_image);
  wall.shapeColor=rgb(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

}

function draw() {
  background("lightBlue");  

  deformation= 0.5*weight*speed*speed/22500;

  if(wall.width/2+car.width/2 > wall.x-car.x){
    car.velocityX=0;

    if(deformation<100){
      car.shapeColor=rgb(0,255,0);
    } 
    
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }

    if(deformation>180){
      car.shapeColor="red";
    }
  }

  drawSprites();

  textSize(20);
  textStyle(BOLD);
  fill("black");
  text("Speed: "+Math.round(speed),100,100);
  text("Weight: "+Math.round(weight),230,100);
  text("Deformation: "+Math.round(deformation),370,100);

}