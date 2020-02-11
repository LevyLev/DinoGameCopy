class Man{
    constructor(){
        this.r=100;
        this.x=50;
        this.y=height-this.r;
        this.vy=0;
        this.gravity=2;
    }

    jump(){
        if(this.y==height-this.r){
            this.vy = -25;
        }
    }
    hits(cone){
        // let x1=this.x+this.r * 0.5;
        // let y1=this.y+this.r * 0.5;
        let x2=cone.x+cone.r * 0.5;
        let y2=cone.y+cone.r * 0.5;

        return collideRectCircle(this.x+10,this.y,this.r-40,this.r-40,x2,y2,cone.r-20)
    }
    move(){
        this.y +=this.vy;
        this.vy+=this.gravity;
        this.y=constrain(this.y,0,height-this.r);
    }
    show(){
        image(manImg,this.x,this.y,this.r,this.r);
        noFill();
        rectMode(CORNER);
        rect(this.x+10,this.y,this.r-40,this.r-40);
    }
}
