class Cannon{
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;

        this.cannonShooter = loadImage("assets/cannon.png")
        this.cannonBase = loadImage("assets/cannonBase.png")
    }

    display(){
        push();
        translate(this.x,this.y)
        imageMode(CENTER)
        image(this.cannonShooter,0,0,this.w,this.h)
        pop();

        image(this.cannonBase,70,20,200,200)
    }

}