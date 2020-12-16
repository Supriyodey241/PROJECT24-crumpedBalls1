const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper,ground;
var rect1,rect2,rect3;


function preload()
{
	
}

function setup() {
  createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  paper = new Paper(90,299,20);
  rect1 = new Dustbin(1000,478,200,20);
  rect2 = new  Dustbin(890,438,20,100);
  rect3 = new  Dustbin(1110,438,20,100);
	ground = new Ground(600,height,1200,20); 

	
}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);	
  background(0);
  
  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:80, y:-85});
}

}

