let sun;
let planets = [];
let imgs = [];

function preload(){
    
  for (var i = 0; i <= 8; i++) { //Boucle pour load images planétes
    imgs.push(loadImage(`images/pl${i}.png`));
  }
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    sun = new Planet(imgs[8],createVector(width/2,height/2),150);
    

}

function draw() {
    background(0);
    sun.draw();
    sun.move();

}