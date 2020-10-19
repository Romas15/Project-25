
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;


function preload()
{
}

function setup() {
	createCanvas(1050,500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//garbage1=new Garbage(900,375,20,170);
//garbage2=new Garbage(700,375,20,170);
	//garbage3=new Garbage(800,450,218,20);
	garbage1 = new Garbage(850,325,10,240)
	garbage2 = new Garbage(753,362,10,280)
	paperObject=new Paper(200,200,50);
	groundObject=new Ground(width/2,470,width,17);
	
	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	}); */
	

	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
 
  
  paperObject.display();
  groundObject.display();
  garbage1.display();

  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:115,y:-120});

  
	}
}


