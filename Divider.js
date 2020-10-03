
class Divder {
    //adding arguments to our object[position and scale]
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,

        }
        this.body = Bodies.circle(x, y, width, height, options);

        //nameSpacing width and height
        this.width = width;
        this.height = height;
        World.add(world, this.body)

    }

    display() {
        //nameSpacing position(position of object)
        var pos = this.body.position
        ellipse(pos.x, pos.y, this.width, this.height)

    }



}