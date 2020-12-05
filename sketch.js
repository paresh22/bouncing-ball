const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myEngine,myWorld,myObj1,myObj2;


function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var rect_options={
  isStatic: true
  }

  myObj1=Bodies.rectangle(400,390,800,20,rect_options);
  World.add(myWorld,myObj1);
  console.log(myObj1);

  var ball_options={
    restitution: 0.8
  }
  myObj2=Bodies.circle(200,50,30,ball_options);
  World.add(myWorld,myObj2);
}

function draw() {
  background(255,203,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(myObj1.position.x,myObj1.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(myObj2.position.x,myObj2.position.y,30,30);
  fill("blue");
  rect(400,100,45,45);
  drawSprites();
}