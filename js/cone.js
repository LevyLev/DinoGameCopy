class Cone{
    constructor(){
        this.r=60;
        this.x=width;
        this.y=height-this.r-15;
    }

    move(){
        this.x -=16;
    }

    show(){
        image(coneImg,this.x,this.y,this.r,this.r);
        noFill();
        ellipseMode(CORNER);
        ellipse(this.x,this.y,this.r-20,this.r);
    }
}