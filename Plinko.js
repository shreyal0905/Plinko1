class Plinko{
    constructor(x,y,){
        var options={
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 10, options);

        //World.add(world, this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x, this.body.position.y, 10);
        pop();

    }
};