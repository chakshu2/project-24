class   Sand{
    constructor(x,y){
        var options={
            'density':0.5,
            'friction':0.5,
            'restitution':1
        }
        this.body=Bodies.circle(x,y,10);
        this.radius=10;
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
      
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, 10,10);

    }
}