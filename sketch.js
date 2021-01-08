
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, ground, BottomBox, LeftBox, RightBox;

function setup() {
	createCanvas(1500, 500);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50, 399, 50);
	ground = new Ground(width/2, 430, width, 10);
	
	BottomBox = new Dustbin (1100, 414, 200, PI/2);
	LeftBox = new Dustbin (1000, 374, 100,PI);
	RightBox = new Dustbin (1200, 374, 100,PI);

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
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(paper.body, false);
      Matter.Body.applyForce(paper.body, paper.body.position, {x:115, y:-115})
  }
}
