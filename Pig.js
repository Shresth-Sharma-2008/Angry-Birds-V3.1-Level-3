class Pig extends BaseClass {
  constructor(x, y,q,w){
    super(x,y,q,w);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
    this.w = w;
    this.q = q;
    this.e = 1;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 5){
    super.display();
   }
   else{
     World.remove(world, this.body);
     if(this.e===1){
     if(Pigs===1){
       Pigs=0
     }
     else if(Pigs===2){
       Pigs=1
     }
     else if(Pigs===3){
       Pigs=2
     }
     else if(Pigs===4){
       Pigs=3
     }
     else if(Pigs===5){
       Pigs=4
     }
     else if(Pigs===6){
       Pigs=5
     }
     else if(Pigs===7){
       Pigs=6
     }
     else if(Pigs===8){
       Pigs=7
     }
     else if(Pigs===9){
       Pigs=8
     }
     else if(Pigs===10){
       Pigs=9
     }
     this.e=0;
    }
     push();
     this.Visiblity = this.Visiblity - 2;
     tint(200,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, this.q, this.w);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};

