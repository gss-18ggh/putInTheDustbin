class Dustbin{
    constructor(x, y){
var options={
    isStatic: true
}
        this.body=Bodies.rectangle(this.x, this.y, 200, 200, options);
        World.add(world, this.body);
        
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;

        this.image = loadImage("db.png");


    }

display(){

    var pos = this.body.position



    push()
    translate(pos.x, pos.y);
    
    rectMode(CENTER);
    image(this.image, this.x, this.y, 200, 130);
    
    pop()
    

}

}