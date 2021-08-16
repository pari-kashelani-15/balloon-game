const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg, boardImg;
var score=0;
var ground;
var arrow;
var bow;
var balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8, balloon9, balloon10, balloon11, 
 balloon12, balloon13, balloon114, balloon15, balloon16, balloon17, balloon18, balloon19, balloon20, balloon21;
//var shelf1, shelf2, shelf3, shelf4, shelf5, shelf6, shelf7, shelf8, shelf9, shelf10, shelf11, shelf12, shelf13, shelf14,
 //shelf15, shelf16, shelf17, shelf18, shelf19, shelf20, shelf21, shelf22, shelf23, shelf24, shelf25, shelf26, shelf27, shelf28,
 //shelf29, shelf30, shelf31, shelf32, shelf33, shelf34, shelf35, shelf36, shelf37, shelf38, shelf39, shelf40, shelf41, shelf42;

function preload(){
  backgroundImg = loadImage("bg 3.jpg");

  boardImg = loadImage("wooden board 2.png");
}

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(displayWidth/2,height-30,width,20);

  arrow = new Arrow(100, 20, 300, 500);

  bow = new Bow(arrow.body,{x:1300, y:700});

  balloon1 = new Balloon20(200,320,200,400);
  balloon2 = new Balloon20(200,440,200,400);
  balloon3 = new Balloon20(200,560,200,400);
  balloon4 = new Balloon20(200,680,200,400);
  balloon5 = new Balloon20(440,320,200,400);
  balloon6 = new Balloon20(440,440,200,400);
  balloon7 = new Balloon20(440,560,200,400);
  balloon8 = new Balloon20(440,680,200,400);
  balloon9 = new Balloon20(275,700,360,200);
  balloon10 = new Balloon20(365,700,360,200);
  balloon11 = new Balloon20(275,300,360,200);
  balloon12 = new Balloon20(365,300,360,200);
  balloon13 = new Balloon50(260,380,200,400);
  balloon14 = new Balloon50(255,500,180,400);
  balloon15 = new Balloon50(260,620,200,400);
  balloon16 = new Balloon50(380,380,200,400);
  balloon17 = new Balloon50(385,500,180,400);
  balloon18 = new Balloon50(380,620,200,400);
  balloon19 = new Balloon50(320,385,200,360);
  balloon20 = new Balloon50(320,615,200,360);
  balloon21 = new Balloon100(320,500,280,480);

  
  
 

}

function draw() {
  background(backgroundImg); 

  text("SCORE : " + score, 50, 50);
  
  image(boardImg, 70, 170);

  Engine.update(engine)

  ground.display();

  arrow.display();
  
  bow.display();

  balloon1.display();
  balloon2.display();
  balloon3.display();
  balloon4.display();
  balloon5.display();
  balloon6.display();
  balloon7.display();
  balloon8.display();
  balloon9.display();
  balloon10.display();
  balloon11.display();
  balloon12.display();
  balloon13.display();
  balloon14.display();
  balloon15.display();
  balloon16.display();
  balloon17.display();
  balloon18.display();
  balloon19.display();
  balloon20.display();
  balloon21.display();

 

  removeingballoon21();
  removeingballoon1();
  removeingballoon2();
  removeingballoon3();
  removeingballoon4();
  removeingballoon5();
  removeingballoon6();
  removeingballoon7();
  removeingballoon8();
  removeingballoon9();
  removeingballoon10();
  removeingballoon11();
  removeingballoon12();
  removeingballoon13();
  removeingballoon14();
  removeingballoon15();
  removeingballoon16();
  removeingballoon17();
  removeingballoon18();
  removeingballoon19();
  removeingballoon20();


  
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  bow.fly();
}

function removeingballoon21(){
  var collision = Matter.SAT.collides(balloon21.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+100;
  }
}


function removeingballoon1(){
  var collision = Matter.SAT.collides(balloon1.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon2(){
  var collision = Matter.SAT.collides(balloon2.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon3(){
  var collision = Matter.SAT.collides(balloon3.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon4(){
  var collision = Matter.SAT.collides(balloon4.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon5(){
  var collision = Matter.SAT.collides(balloon5.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon6(){
  var collision = Matter.SAT.collides(balloon6.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon7(){
  var collision = Matter.SAT.collides(balloon7.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon8(){
  var collision = Matter.SAT.collides(balloon8.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon9(){
  var collision = Matter.SAT.collides(balloon9.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon10(){
  var collision = Matter.SAT.collides(balloon10.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon11(){
  var collision = Matter.SAT.collides(balloon11.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon12(){
  var collision = Matter.SAT.collides(balloon12.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+20;
  }
}

function removeingballoon13(){
  var collision = Matter.SAT.collides(balloon13.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}

function removeingballoon14(){
  var collision = Matter.SAT.collides(balloon14.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}

function removeingballoon15(){
  var collision = Matter.SAT.collides(balloon15.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}

function removeingballoon16(){
  var collision = Matter.SAT.collides(balloon16.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}

function removeingballoon17(){
  var collision = Matter.SAT.collides(balloon17.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}

function removeingballoon18(){
  var collision = Matter.SAT.collides(balloon18.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}

function removeingballoon19(){
  var collision = Matter.SAT.collides(balloon19.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}

function removeingballoon20(){
  var collision = Matter.SAT.collides(balloon20.body, arrow.body); 
  if (collision.collided) 
  { 
    balloon21.body=null;
    score=score+50;
  }
}