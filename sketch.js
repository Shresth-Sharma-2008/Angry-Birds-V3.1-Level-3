//changables
var Birds = 1;
var Birds1 = 1;
var Pigs=4;
function setup(){
    setup1();
    //Enter Objects Here
    //box = new Box(x,y,width,height)
    //log = new Log(x,y,width,length,PI/2)
    //pig = new Pig(x,y,width,height)
    box1 = new Box(800,550,100,100);
    box2 = new Box(1000,550,100,100);
    box3 = new Box(800,450,100,100);
    box4 = new Box(1000,450,100,100);
    box5 = new Box(800,350,100,100);
    box6 = new Box(1000,350,100,100);
    box7 = new Box(800,250,100,100);
    box8 = new Box(1000,250,100,100);
    box9 = new Box(800,150,100,100);
    box10 = new Box(1000,150,100,100);
    box11 = new Box(900,550,100,100);
    pig1 = new Pig(900,450,100,100);
    pig2 = new Pig(900,450,100,100);
    pig3 = new Pig(900,450,100,100);
    pig4 = new Pig(900,450,100,100);
}

function draw(){
    draw1();
    //Enter Ojbects Here
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
}