var back;     //background
var volcano;  //volcano image
var heart;    //heart image

var heartParticle = [];

function setup(){
  createCanvas(417, 417);
  imageMode(CENTER);


  for( var i = 0; i < 100; i++){
    heartParticle[i] = new Heart(width/2, (2 * height)/3 - 15);
  }
};

function preload(){
  back = loadImage("img/background.png");
  volcano = loadImage("img/volcano.png");
  heart = loadImage("img/heart.png");

}

function draw(){

  image(back, width/2, height/2);
  image(volcano, width/2, 370);

  for(var i = 0; i < heartParticle.length; i++){
    heartParticle[i].display();
    heartParticle[i].move();
  }
};

function mouseReleased(){
  for (var i = 0; i < heartParticle.length; i++){
    heartParticle[i].posX = width/2;
    heartParticle[i].posY = (2 * height)/3 - 15;
    heartParticle[i].vx = random(-10, 10);
    heartParticle[i].vy = random(-30, 0);
  }
}


function Heart(tempX, tempY){
    this.posX = tempX;
    this.posY = tempY;

    this.vx = random(-10,10);
    this.vy = random(-30, 0);
    var gravity = 1;

    this.move = function(){
      this.posX += this.vx;
      this.posY += this.vy;
      this.vy += gravity;

      if (this.posY + 10 > height){
        this.vy *= -0.5;
        this.vx *= 0.75;
        this.posY = height - 9;
      }

      if (this.posY < 0){
        this.vy *= -1;
      }

      if (this.posX < 10 || this.posX > width){
        this.vx *= -1;
      }
    }

    this.display = function(){
      // scale(random(2));
      image(heart, this.posX, this.posY);
    }
}
