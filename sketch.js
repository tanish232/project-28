
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree1,ground,boy;
var stone,mango1,mango2,mango3,mango4,mango5;
function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  tree1=new Tree(650,450);
  ground=new Ground(400,height,800,20)
  boy= new Boy(300,650,100,200)
  stone=new Stone(300,600,40)
  World.add(world,boy)
	Engine.run(engine);
  mango1=new Mango(650,250,50)
  mango2=new Mango(550,420,50)
  mango3=new Mango(750,420,50)
  mango4=new Mango(650,400,50)
  mango5=new Mango(650,320,50)
throw1=new Throw(stone.body,{x:260,y:600})
}


function draw() {
  background("white");
 // rectMode(CENTER)
 //rect(boy.position.x,boy.position.y,100,50)
 //rect.addImage("standing boy",boyImage)
 tree1.display();
 boy.display();
 stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  throw1.display();
 detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})  
}
function mouseReleased(){
 throw1.fly()   
} 
function detectCollision(istone,imango){
    mangoBodyPosition=imango.body.position
     stoneBodyPosition=istone.body.position
      var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
      if(distance<=imango.r+istone.r){
      Matter.Body.setStatic(y.body,false)
      }
    }
    function keyPressed(){
      if (keyCode===32){
        throw1.attach(stone.body);
      }
    
}

