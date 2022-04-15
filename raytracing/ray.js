
class ray{
    //relative endpoint, rotation, number, length
    //method: Check if intersect
    #rotation;
    #endPointX;
    #endPointY;
    constructor(rotation){
        this.#rotation = rotation
        this.#endPointX = mouseX + Math.floor((rayLength * Math.sin(this.#rotation*Math.PI/180)))
        this.#endPointY = mouseY + Math.floor((rayLength * Math.cos(this.#rotation*Math.PI/180)))
    }
    getEndPoints(){
        this.checkIntersect()
        return [this.#endPointX,this.#endPointY]
    }
    checkIntersect(){
        //x/y 1 = origin, 2 = rayendpoint, 3 is first wall points, 4 is second.
        for(var i = 0; i<walls.length; i++){
        let t = ((mouseX - walls[i][0])*(walls[i][1]-walls[i][3])-(mouseY-walls[i][1])*(walls[i][0]-walls[i][2]))/((mouseX-this.#endPointX)*(walls[i][1]-walls[i][3])-(mouseY - this.#endPointY)*(walls[i][0]-walls[i][2]))
        let u = ((mouseX-walls[i][0])*(mouseY-this.#endPointY)-(mouseY-walls[i][1])*(mouseX-this.#endPointX))/((mouseX-this.#endPointX)*(walls[i][1]-walls[i][3])-(mouseY - this.#endPointY)*(walls[i][0]-walls[i][2]))
        if(((t<=1)&&(t>=0))&&((u<=1)&&(u>=0))){
            this.#endPointX = mouseX + (t*(this.#endPointX - mouseX))
            this.#endPointY = mouseY + (t*(this.#endPointY - mouseY))
        }
    
        }





    }
    render(){
        this.checkIntersect()
        ctx.beginPath()
        ctx.moveTo(mouseX,mouseY)
        ctx.lineTo(this.#endPointX,this.#endPointY)
        ctx.strokeStyle = "#000000"
        ctx.stroke()
    }
}
