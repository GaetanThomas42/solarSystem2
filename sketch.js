let planet;
let img;

function preload(){
    img = loadImage('planet.png');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    planet = new Planet(createVector(width/2,height/2),img);

}

function draw() {
    
    planet.draw();

}