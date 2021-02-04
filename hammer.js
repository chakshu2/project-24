class   Hammer{
    constructor(x,y){
        var options={
            'density':3,
            'friction':1,
            'restitution':1
        }
        this.body=Bodies.rectangle(x,y,100,25);
        this.width=100;
        this.height=25;
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, 100,25);

    }
}