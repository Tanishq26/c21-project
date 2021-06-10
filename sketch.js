const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var ball;
var wall1;
var wall2;
function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
       world = engine.world;

       var ball_options ={
           isStatic :false,
           restitution : 0.3,
           friction : 0,
           density : 1

       }
       ground = new ground(width/2,670,width,20);
           wall1 = new ground(1100,600,20,120);
           wall2 = new ground(1150,600,20,120);

           ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw(){
background(0);
ellipse(ball.position.x,ball.position.y,20);
ground.show();
wall1.show();
wall2.show();
Engine.update(engine);
}
ground.display();

function keyPressed(){
if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
}