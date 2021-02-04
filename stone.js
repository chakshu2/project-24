class   Stone{
    constructor(x,y){
        var options={
            'density':0.5,
            'friction':0.5,
            'restitution':1
        }
        this.body=Bodies.rectangle(x,y,70,70);
        this.width=70;
        this.height=70;
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
      
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, 70,70);

    }
}