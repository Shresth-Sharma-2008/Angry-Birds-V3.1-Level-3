const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var img;
var a1=0;
let click=0;
var Pigs1=1;
var bird01;
var play=0;

window.onmousedown = () => {  
    click=1 
    if (click===1) {  
      console.log('mouse button down')
      if(play===0){
          play=1
      } 
    }  
  }  
  window.onmouseup = () => {  
    click=0
    if (click===0) {  
      console.log('mouse button up')  
    }  
  }
  
function preload() {
    getTime();
     img=loadImage=("sprites/bg2.png")
     bird01=loadImage=("sprites/bird.png")
     p1=loadSound("a1.mp3")
     p3=loadSound("a2.mp3")
     p4=loadSound("a3.mp3")
     p5=loadSound("a4.mp3")
     p2=loadSound("aback.mp3")
}

function setup1(){
    alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    var canvas = createCanvas(1360,610);
    
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(680,610,1360,20);
    platform = new Ground(150, 460, 500, 380);
    bird = new Bird(350,114.73);

    //Enter objects here



    if(Birds1===6){
        bird6 = new Bird(300,150);
        bird5 = new Bird(250,100);
        bird4 = new Bird(200,50);
        bird3 = new Bird(150,0);
        bird2 = new Bird(100,-50);
        bird1 = new Bird(50,-100);
    }
    if(Birds1===5){
        bird6 = new Bird(300,150);
        bird5 = new Bird(250,100);
        bird4 = new Bird(200,50);
        bird3 = new Bird(150,0);
        bird2 = new Bird(100,-50);
    }
    if(Birds1===4){
        bird6 = new Bird(300,150);
        bird5 = new Bird(250,100);
        bird4 = new Bird(200,50);
        bird3 = new Bird(150,0);
    }
    if(Birds1===3){
        bird6 = new Bird(300,150);
        bird5 = new Bird(250,100);
        bird4 = new Bird(200,50);
    }
    if(Birds1===2){
        bird6 = new Bird(300,150);
        bird5 = new Bird(250,100);
    }
    if(Birds1===1){
        bird6 = new Bird(300,150);
    }
    slingshot = new SlingShot(bird.body,{x:350, y:100});
}
function draw1(){
    background("yellow")
    if(play===1){
        p2.loop();
        play=2
    }
    Engine.update(engine);
    //strokeWeight(4);
    textSize(40);
    //text("Birds Left : "+Birds,50,55);
    ground.display();
   //Enter object display here

    

    bird.display();
    platform.display();

    

    slingshot.display();

    if(Pigs===0&&Pigs1===1){
        p1.play();
        p2.stop();
        Pigs1=0;
    }
    if(Pigs===0){
        textSize(200);
        fill("red");
        text("You Win",480,300);
    }
    console.log(Pigs);
    if(Birds1===6){
    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    bird6.display();
    }
    if(Birds1===5){
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    bird6.display();
    }
    if(Birds1===4){
    bird3.display();
    bird4.display();
    bird5.display();
    bird6.display();
    }
    if(Birds1===3){
    bird4.display();
    bird5.display();
    bird6.display();
    }
    if(Birds1===2){
    bird5.display();
    bird6.display();
    }
    if(Birds1===1){
    bird6.display();
    }

if(Birds1===6){
    if(a1===0 && mouseX<500 && click===1 && Birds===6){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===5){
        Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===4){
        Matter.Body.setPosition(bird2.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===3){
        Matter.Body.setPosition(bird3.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===2){
        Matter.Body.setPosition(bird4.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===1){
        Matter.Body.setPosition(bird5.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird6.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
}
if(Birds1===5){
    if(a1===0 && mouseX<500 && click===1 && Birds===5){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===4){
        Matter.Body.setPosition(bird2.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===3){
        Matter.Body.setPosition(bird3.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===2){
        Matter.Body.setPosition(bird4.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===1){
        Matter.Body.setPosition(bird5.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird6.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
}
if(Birds1===4){
    if(a1===0 && mouseX<500 && click===1 && Birds===4){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        p4.play();
    }    
    if(a1===0 && mouseX<500 && click===1 && Birds===3){
        Matter.Body.setPosition(bird3.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===2){
        Matter.Body.setPosition(bird4.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===1){
        Matter.Body.setPosition(bird5.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird6.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
}
if(Birds1===3){
    if(a1===0 && mouseX<500 && click===1 && Birds===3){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===2){
        Matter.Body.setPosition(bird4.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===1){
        Matter.Body.setPosition(bird5.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird6.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
}
if(Birds1===2){
    if(a1===0 && mouseX<500 && click===1 && Birds===2){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===1){
        Matter.Body.setPosition(bird5.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird6.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
}
if(Birds1===1){
    if(a1===0 && mouseX<500 && click===1 && Birds===1){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird6.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
}
if(Birds1===0){
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        p4.play();
    }  
}
}
function mouseReleased(){
    if(mouseX<500){
        if(slingshot.sling.bodyA!==null){
            p3.play();
            p3.play();
            p3.play();
            p3.play();
            p3.play();
        }
        slingshot.fly();
        a1=1;
    }
}
function keyPressed(){
if(Birds1===6){    
    if(keyCode===32 && Birds>=1 && Birds===6){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird1.body, {x: 350 , y: 114.73});

    slingshot.attach(bird1.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===5){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird2.body, {x: 350 , y: 114.73});
    slingshot.attach(bird2.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===4){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird3.body, {x: 350 , y: 114.73});
    slingshot.attach(bird3.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===3){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird4.body, {x: 350 , y: 114.73});
    slingshot.attach(bird4.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===2){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird5.body, {x: 350 , y: 114.73});
    slingshot.attach(bird5.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===1){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird6.body, {x: 350 , y: 114.73});
    slingshot.attach(bird6.body);
    a1=0
    }
}
if(Birds1===5){    
    if(keyCode===32 && Birds>=1 && Birds===5){
        Birds = Birds-1;
        bird.trajectory=[];
        
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird2.body, {x: 350 , y: 114.73});
    slingshot.attach(bird2.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===4){
        Birds = Birds-1;
        bird.trajectory=[];
        
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird3.body, {x: 350 , y: 114.73});
    slingshot.attach(bird3.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===3){
        Birds = Birds-1;
        bird.trajectory=[];
        
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird4.body, {x: 350 , y: 114.73});
    slingshot.attach(bird4.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===2){
        Birds = Birds-1;
        bird.trajectory=[];
        
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird5.body, {x: 350 , y: 114.73});
    slingshot.attach(bird5.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===1){
        Birds = Birds-1;
        bird.trajectory=[];
        
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird6.body, {x: 350 , y: 114.73});
    slingshot.attach(bird6.body);
    a1=0
    }
}
if(Birds1===4){    
    if(keyCode===32 && Birds>=1 && Birds===4){
        Birds = Birds-1;
        bird.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird3.body, {x: 350 , y: 114.73});
    slingshot.attach(bird3.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===3){
        Birds = Birds-1;
        bird.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird4.body, {x: 350 , y: 114.73});
    slingshot.attach(bird4.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===2){
        Birds = Birds-1;
        bird.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird5.body, {x: 350 , y: 114.73});
    slingshot.attach(bird5.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===1){
        Birds = Birds-1;
        bird.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird6.body, {x: 350 , y: 114.73});
    slingshot.attach(bird6.body);
    a1=0
    }
}
if(Birds1===3){    
    if(keyCode===32 && Birds>=1 && Birds===3){
        Birds = Birds-1;
        bird.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird4.body, {x: 350 , y: 114.73});
    slingshot.attach(bird4.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===2){
        Birds = Birds-1;
        bird.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird5.body, {x: 350 , y: 114.73});
    slingshot.attach(bird5.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===1){
        Birds = Birds-1;
        bird.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird6.body, {x: 350 , y: 114.73});
    slingshot.attach(bird6.body);
    a1=0
    }
}
if(Birds1===2){    
   if(keyCode===32 && Birds>=1 && Birds===2){
        Birds = Birds-1;
        bird.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird5.body, {x: 350 , y: 114.73});
    slingshot.attach(bird5.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===1){
        Birds = Birds-1;
        bird.trajectory=[];
        bird5.trajectory=[];
        Matter.Body.setPosition(bird6.body, {x: 350 , y: 114.73});
    slingshot.attach(bird6.body);
    a1=0
    }
}
if(Birds1===1){    
    if(keyCode===32 && Birds>=1 && Birds===1){
        Birds = Birds-1;
        bird.trajectory=[];
        Matter.Body.setPosition(bird6.body, {x: 350 , y: 114.73});
    slingshot.attach(bird6.body);
    a1=0
    }
}
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
console.log(responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(datetime);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}