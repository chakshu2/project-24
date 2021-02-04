class   Rubber{
    constructor(x,y){
        var options={
            'density':1,
            'friction':1.5,
            'restitution':0.3
        }
        this.body=Bodies.circle(x,y,80,options);
        this.radius=80;
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
      
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(pos.x, pos.y, 80,80);

    }
}