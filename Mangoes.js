class Mangoes {
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.width=50;
        this.height=50;
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        //this.Visibility = 255;
    }


display(){
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}
}
