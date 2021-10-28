class Planet{
    
    constructor(pos, img){
        this.position = pos;
        this.image = img;
    }

    draw (){
        imageMode(CENTER);
        image(this.image,this.position.x, this.position.y,width/3,width/3);
    
    }
    
    move(){
        
        this.position.x = mouseX;
        
    }
    

}

