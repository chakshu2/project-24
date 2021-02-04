class   Ground{
    constructor(x,y){
        var options={
           isStatic:true
        }
        this.body=Bodies.rectangle(x,y,800,15,options);
        this.width=800;
        this.height=15;
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, 800,15);

    }
}