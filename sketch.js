var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var hi,ground

var particle= [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var ball;
var score=0;
var count=0;
var gameState="start"


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world

  //hi = createSprite(400, 200, 480, 800);
  //hi.shapeColor = color(0)

//for(var k=0;k<=width;k=k+80){
  //divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight))
//}
  ground = new Ground(400,697,450,15);
  line1 = new Divisions(205,565,10,250);
  line2 = new Divisions(300,565,10,250);
  line3 = new Divisions(390,565,10,250);
  line4 = new Divisions(490,565,10,250);
  line5 = new Divisions(590,565,10,250);
 
  plinko1 = new Plinko(205,100,10);
  plinko2 = new Plinko(300,100,10);
  plinko3 = new Plinko(390,100,10);
  plinko4 = new Plinko(490,100,10);
  plinko5 = new Plinko(590,100,10);

  plinko6 = new Plinko(250,150,10);
  plinko7 = new Plinko(350,150,10);
  plinko8 = new Plinko(450,150,10);
  plinko9 = new Plinko(550,150,10);

  plinko10 = new Plinko(205,200,10);
  plinko11 = new Plinko(300,200,10);
  plinko12 = new Plinko(390,200,10);
  plinko13 = new Plinko(490,200,10);
  plinko14 = new Plinko(590,200,10);
  
  plinko15 = new Plinko(250,250,10);
  plinko16 = new Plinko(350,250,10);
  plinko17 = new Plinko(450,250,10);
  plinko18 = new Plinko(550,250,10);

  plinko19 = new Plinko(205,300,10);
  plinko20 = new Plinko(300,300,10);
  plinko21 = new Plinko(390,300,10);
  plinko22 = new Plinko(490,300,10);
  plinko23 = new Plinko(590,300,10);

  plinko24 = new Plinko(250,350,10);
  plinko25 = new Plinko(350,350,10);
  plinko26 = new Plinko(450,350,10);
  plinko27 = new Plinko(550,350,10);

  plinko28 = new Plinko(205,400,10);
  plinko29 = new Plinko(300,400,10);
  plinko30 = new Plinko(390,400,10);
  plinko31 = new Plinko(490,400,10);
  plinko32 = new Plinko(590,400,10);

  




}




function draw() {
  background("black");  
  Engine.update(engine); 
  

  //for (var i = 0; i < plinkos.length; i++) {
    //plinkos[i].display();  
 //}
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  plinko1.display(); 
  plinko2.display();
  plinko3.display(); 
  plinko4.display(); 
  plinko5.display(); 
  plinko6.display(); 
  plinko7.display(); 
  plinko8.display(); 
  plinko9.display(); 
  plinko10.display(); 
  plinko11.display(); 
  plinko12.display(); 
  plinko13.display(); 
  plinko14.display(); 
  plinko15.display(); 
  plinko16.display(); 
  plinko17.display(); 
  plinko18.display(); 
  plinko19.display(); 
  plinko20.display(); 
  plinko21.display(); 
  plinko22.display(); 
  plinko23.display(); 
  plinko24.display(); 
  plinko25.display(); 
  plinko26.display(); 
  plinko27.display(); 
  plinko28.display(); 
  plinko29.display(); 
  plinko30.display(); 
  plinko31.display(); 
  plinko32.display(); 



  
  drawSprites();
}
//600,300,20,400


