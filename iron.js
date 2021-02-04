class Iron{
    constructor(x,y){
        var options={
            'density':0.5,
            'friction':0.5,
            'restitution':1
        }
        this.body=Bodies.rectangle(x,y,60,60);
        this.width=60;
        this.height=60;
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
      
      rectMode(CENTER);
      fill("orange");
      rect(pos.x, pos.y, 60,60);

    }
}