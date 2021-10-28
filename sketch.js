let sun;
let planet;
let imgs = [];

function preload(){
    
  for (var i = 0; i <= 8; i++) { //Boucle pour load images planétes
    imgs.push(loadImage(`images/pl${i}.png`));
  }
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    
    sun = new Sun(width/2,height/2,150,imgs[8]);
    planet = new Planet(width/2,height/2, 200, 500,imgs[2],)

}

function draw() {
    background(0);
    sun.draw();
    sun.move();
    planet.draw();
    planet.move();
    console.log(sun.position);
}