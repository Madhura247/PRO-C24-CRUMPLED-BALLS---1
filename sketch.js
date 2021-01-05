
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, ground, BottomBox, LeftBox, RightBox;

function setup() {
	createCanvas(1500, 500);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50, 400, 10);
	ground = new Ground(width/2, 430, width, 10);
	
	BottomBox = new Dustbin (1320, 414, 200, 90);
	LeftBox = new Dustbin (1220, 374, 100, 0);
	RightBox = new Dustbin (1420, 374, 100, 0);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  
  Engine.update(engine);

  paper.display();
  ground.display();
  BottomBox.display();
  LeftBox.display();
  RightBox.display();
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(paper.body, false);
      Matter.Body.applyForce(paper.body, paper.body.position, {x:5, y:-5})
  }
}