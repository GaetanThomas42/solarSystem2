class Planet{
    
    constructor(x, y, r, dist, img){
          this.position = createVector(x, y); //vecteur position
          this.origin = createVector(sun.position.x, sun.position.y); //origine du soleil
          this.r = r; //rayon
          this.a = 0; //angle
          this.dist = dist;
          this.img = img;
    }


//FCT affichage
    draw() {
      imageMode(CENTER);
      //image(this.img, this.pos.x, this.pos.y, this.r, this.r * 1.3);
      image(this.img, this.position.x, this.position.y, this.r, this.r);
    }
    //FCT Mouvement
    move() {

      this.a = (this.a + Math.PI / 360);
      // POS soleil dépend de son origine + rota
      this.position.x = this.origin.x + this.dist * Math.cos(this.a);
      this.position.y = this.origin.y + this.dist * Math.sin(this.a);

    }
    

}

