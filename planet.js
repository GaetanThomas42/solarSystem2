class Planet{
    
    constructor(img, pos, r){
        this.position = pos;
        this.image = img;
        this.radius = r;
    }

    draw (){
        imageMode(CENTER);
        image(this.image,this.position.x, this.position.y, this.radius, this.radius);
    
    }
    
    move(){
        
        
        
    }
    

}

