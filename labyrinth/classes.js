class zombie{
    #x;
    #y;
    #fakeX;
    #fakeY;
    #desiredPos = [];
    //real
    #vx;
    #vy;
    #maxSpeed = 2.1;
    #radius = 10
    constructor(x,y){
        this.#x=x;
        this.#y=y;
        let fakeCoords = convertRealCoordsToFake(this.#x,this.#y)
        this.#fakeX = fakeCoords[0];
        this.#fakeY = fakeCoords[1];
    }
    updateAI(destinX,destinY){
    

        let path = aStar(this.#fakeX,this.#fakeY,destinX,destinY)
        // console.log(this.#fakeX,this.#fakeY,destinX,destinY)
        // this.renderaStar(path)
        // if(path.length = 0){
        //     path = [[this.#fakeX,this.#fakeY]]
        // }
        let fPath1 = convertFakeCoordsToReal(path[0][0],path[0][1])
        if(this.#desiredPos.length==0){
            this.#desiredPos = [fPath1[0]+spacing/2,fPath1[1]+spacing/2]
        } else {
            let distanceToDesired = Math.sqrt(Math.pow(this.#desiredPos[0]-this.#x,2)+Math.pow(this.#desiredPos[1]-this.#y,2))
            if(distanceToDesired<=5){
                this.#desiredPos = [fPath1[0]+spacing/2,fPath1[1]+spacing/2]
            }
        }
        // console.log(this.#desiredPos,mouseX,mouseY)
        let angle = Math.atan2(this.#desiredPos[1]-this.#y, this.#desiredPos[0]-this.#x)

        this.#vx = Math.cos(angle) * this.#maxSpeed
        this.#vy = Math.sin(angle) * this.#maxSpeed
        // console.log(this.#vx,this.#vy)
        // console.log(angle*180/Math.PI)

        let xValid = true;
        for(var i = 0; i<stone.length; i++){
            let stoneReal = convertFakeCoordsToReal(stone[i][0],stone[i][1])
            let top = stoneReal[1]
            let right = stoneReal[0]+spacing
            let bottom = stoneReal[1]+spacing
            let left = stoneReal[0]
            if((this.#y+this.#radius>=top&&this.#y+this.#radius<=bottom)||(this.#y-this.#radius>=top&&this.#y-this.#radius<=bottom)){
                let xTheory = this.#x+this.#vx
                if((xTheory+this.#radius<=right&&xTheory+this.#radius>=left)||(xTheory-this.#radius<=right&&xTheory-this.#radius>=left)){
                    xValid = false
                }
            }
        }

        if(xValid){
            this.#x+=this.#vx
            this.#fakeX = convertRealCoordsToFake(this.#x,this.#y)[0]
        }

        for(var i = 0; i<stone.length; i++){
            let stoneReal = convertFakeCoordsToReal(stone[i][0],stone[i][1])
            let top = stoneReal[1]
            let right = stoneReal[0]+spacing
            let bottom = stoneReal[1]+spacing
            let left = stoneReal[0]
            if((this.#x+this.#radius>=left&&this.#x+this.#radius<=right)||(this.#x-this.#radius>=left&&this.#x-this.#radius<=right)){
                let yTheory = this.#y+this.#vy
                if(yTheory+this.#radius>=top&&yTheory+this.#radius<=bottom){
                    if(this.#vy>=0){
                        this.#vy=0
                    }
                } else if(yTheory-this.#radius>=top&&yTheory-this.#radius<=bottom){
                    if(this.#vy<=0){
                        this.#vy=0
                    }
                }
            }
        }

        //works, but I should limit it to being in only one direction, instead of all directions.

        this.#y+=this.#vy
        this.#fakeY = convertRealCoordsToFake(this.#x,this.#y)[1]

    }

    render(){
        ctx.beginPath()
        ctx.arc(this.#x,this.#y,this.#radius,0, 2 * Math.PI)
        ctx.fillStyle = "#FF0000"
        ctx.fill()
    }

    renderaStar(path){
        // console.log(path)
       let Apath =  extractPath(path)
       for(var i = 0; i<Apath.length; i++){
           let realCoords = convertFakeCoordsToReal(Apath[i][0],Apath[i][1])
           ctx.beginPath()
           ctx.rect(realCoords[0],realCoords[1],spacing,spacing)
           ctx.fillStyle == "#FF0000"
           ctx.fill()
       }
    }
    checkDistance(){
        let coords = player.getPos()
        return(Math.sqrt(Math.pow(this.#x-coords[0],2)+Math.pow(this.#y-coords[1],2)))
    }
}



class Player{
#x
#y
#angle = 0
        //1 is straight up, all the way to 8, up and left
#vx = 0
#vy = 0
#fakeX
#fakeY
#radius = 7;
#maxSpeed = 2
#rSpeed = 4
    constructor(x,y){
        this.#x = x;
        this.#y = y;
        let FakeCoords = convertRealCoordsToFake(x,y)
        this.#fakeX = FakeCoords[0]
        this.#fakeY = FakeCoords[1]
    }

    move(){
        // let up = false;
        // let right = false;
        // let down = false;
        // let left = false;
        //    if((keyState[87]||keyState[38])){
        //     //up
        //     up = true;
        //     this.#vy = -1*this.#maxSpeed
        //    } else {
        //        up = false
        //    }
        //    if(keyState[40]||keyState[83]){
        //        //down
        //             down = true
        //             this.#vy = 1*this.#maxSpeed
        //    } else {
        //        down = false
        //    }
        //    if(keyState[37]||keyState[65]){
        //        //left
        //        if(up||down){
        //            left = true
        //            this.#vx = -.707*this.#maxSpeed
        //            this.#vy = this.#vy *.707
        //        } else {
        //            left = true
        //            this.#vx = -1*this.#maxSpeed
        //        }
        //    } else {
        //        left = false;
        //    }
        //     if(keyState[39]||keyState[68]){
        //     //right
        //     if(up||down){
        //         right = true
        //         this.#vx = .707*this.#maxSpeed
        //         this.#vy = this.#vy * .707
        //     } else{
        //         right = true
        //         this.#vx = 1*this.#maxSpeed
        //     }
        //    } else {
        //        right = false
        //    }

        //    if(!up&&!down){
        //        this.#vy = 0
        //    }
        //    if(up&&down){
        //        down = false
        //    }
        //    if(!left&&!right){
        //        this.#vx = 0
        //    }
        //    if(left&&right){
        //        left = false
        //    }


//experimental
           if((keyState[87]||keyState[38])){
            //up
                this.#vx = Math.cos(this.#angle*Math.PI/180)*this.#maxSpeed
                this.#vy = Math.sin(this.#angle*Math.PI/180)*this.#maxSpeed

           } else {
               this.#vx = 0
               this.#vy = 0
           }
            if(keyState[37]||keyState[65]){
               //left
               this.#angle -= this.#rSpeed;
            }
            if(keyState[39]||keyState[68]){
            //right
                this.#angle+=this.#rSpeed
            }

            //walls

            for(var i = 0; i<stone.length; i++){
                let stoneReal = convertFakeCoordsToReal(stone[i][0],stone[i][1])
                let top = stoneReal[1]
                let right = stoneReal[0]+spacing
                let bottom = stoneReal[1]+spacing
                let left = stoneReal[0]
                let xp = this.#x + this.#radius + this.#vx
                let xm = this.#x - this.#radius + this.#vx
                let yp = this.#y + this.#radius + this.#vy
                let ym = this.#y - this.#radius + this.#vy
                if(((yp<=bottom)&&(yp>=top))||((ym<=bottom)&&(ym>=top))){
                    if((xp<=right)&&(xp>=left)){
                        if(this.#vx>0){
                            this.#vx = 0
                        }
                    }
                    if((xm<=right)&&(xm>=left)){
                        if(this.#vx<0){
                            this.#vx = 0
                        }
                    }
                }
            }
           this.#x+=this.#vx

            for(var i = 0; i<stone.length; i++){
                let stoneReal = convertFakeCoordsToReal(stone[i][0],stone[i][1])
                let top = stoneReal[1]
                let right = stoneReal[0]+spacing
                let bottom = stoneReal[1]+spacing
                let left = stoneReal[0]
                let xp = this.#x + this.#radius + this.#vx
                let xm = this.#x - this.#radius + this.#vx
                let yp = this.#y + this.#radius + this.#vy
                let ym = this.#y - this.#radius + this.#vy

                if(((xp<=right)&&(xp>=left))||((xm<=right)&&(xm>=left))){
                    if((yp<=bottom)&&(yp>=top)){
                        if(this.#vy>0){
                            this.#vy = 0
                        }
                    }
                    if((ym<=bottom)&&(ym>=top)){
                        if(this.#vy<0){
                            this.#vy = 0
                        }
                    }
                }

            }

           this.#y+=this.#vy
           //include walls



           //get angle
        //    if(up&&!right&&!down&&!left){
        //     this.#angle = 1
        //    } else if(up&&right&&!down&&!left){
        //     this.#angle = 2
        //    } else if(!up&&right&&!down&&!left){
        //     this.#angle = 3
        //    } else if(!up&&right&&down&&!left){
        //     this.#angle = 4
        //    } else if(!up&&!right&&down&&!left){
        //     this.#angle = 5
        //    } else if(!up&&!right&&down&&left){
        //     this.#angle = 6
        //    } else if(!up&&!right&&!down&&left){
        //     this.#angle = 7
        //    } else if(up&&!right&&!down&&left){
        //     this.#angle = 8
        //    }
        //move

        
        //cast light

        //render
    }

    render(){
        ctx.resetTransform();

        this.renderRays()
    
        
        ctx.beginPath();

        ctx.translate(this.#x, this.#y)
        ctx.rotate((this.#angle+90) * Math.PI / 180);
        ctx.translate(-this.#x, -this.#y)
    
        let scale = .3

        ctx.moveTo(this.#x + 25*scale, this.#y + 27.5*scale);
        //ship shape
        ctx.lineTo(this.#x, this.#y + 20*scale);
        ctx.lineTo(this.#x - 25*scale, this.#y + 27.5*scale);
        ctx.lineTo(this.#x, this.#y - 27.5*scale);
        ctx.lineTo(this.#x + 25*scale, this.#y + 27.5*scale)
        ctx.lineTo(this.#x, this.#y + 20*scale);
        ctx.moveTo(this.#x, this.#y);
    
    
        ctx.closePath();
    
    
    
      ctx.fillStyle="#F07000"
      ctx.fill();


        ctx.resetTransform()
    
    }


    renderRays(){
       for(var i = 0; i<rayAmount; i++){
           ctx.beginPath()
            ctx.moveTo(this.#x,this.#y)
        //    let focusRay = new ray((45*this.#angle+225)-((arcLength-1)/2)+i*rayInterval,this.#x,this.#y)
            let focusRay = new ray(i*rayInterval,this.#x,this.#y)
           //focus ray should be everywhere but there
           let endPoints = focusRay.getEndPoints()
           let unObstructedEndPoints = focusRay.getNonObstructedEndpoints()
           let distanceToEndPoint = Math.sqrt(Math.pow(this.#x-endPoints[0],2)+Math.pow(this.#y-endPoints[1],2))
           let justPastEndPoints = [this.#x+Math.cos(i*rayInterval*Math.PI/180)*(distanceToEndPoint+7),this.#y+Math.sin(i*rayInterval*Math.PI/180)*(distanceToEndPoint+7)]
           ctx.lineTo(unObstructedEndPoints[0],unObstructedEndPoints[1])
           let grd = ctx.createLinearGradient(this.#x,this.#y,justPastEndPoints[0],justPastEndPoints[1])
           grd.addColorStop(.99, "rgba(0,0,0,0)");
           grd.addColorStop(1, "rgba(0,0,0, 1)");
           ctx.lineWidth = 2;
           ctx.strokeStyle = grd
           ctx.stroke()
       }
    }
    getPos(){
        return([this.#x,this.#y])
    }
    getAngle(){
        return(this.#angle)
    }
}


class ray{
    #rotation;
    //degrees, I believe
    #endPointX;
    #endPointY;
    #nonObstructedEndpointX
    #nonObstructedEndpointY
    #originX;
    #originY;
    constructor(rotation,originX,originY){
        this.#originX = originX;
        this.#originY = originY;

        this.#rotation = rotation //0 is all the way to the right
        //goes clockwise
        this.#endPointX = this.#originX + Math.floor((rayLength * Math.cos(this.#rotation*Math.PI/180)))
        this.#endPointY = this.#originY + Math.floor((rayLength * Math.sin(this.#rotation*Math.PI/180)))
        this.#nonObstructedEndpointX = this.#originX + Math.floor((710 * Math.cos(this.#rotation*Math.PI/180)))
        this.#nonObstructedEndpointY = this.#originY + Math.floor((710 * Math.sin(this.#rotation*Math.PI/180)))
    }

    getEndPoints(){
        this.checkIntersect()
        return([this.#endPointX,this.#endPointY])
    }
    getNonObstructedEndpoints(){
        return([this.#nonObstructedEndpointX,this.#nonObstructedEndpointY])
    }
    checkIntersect(){
        //x/y 1 = origin, 2 = rayendpoint, 3 is first wall points, 4 is second.
        for(var i = 0; i<walls.length; i++){
            let t = ((this.#originX - walls[i][0])*(walls[i][1]-walls[i][3])-(this.#originY-walls[i][1])*(walls[i][0]-walls[i][2]))/((this.#originX-this.#endPointX)*(walls[i][1]-walls[i][3])-(this.#originY - this.#endPointY)*(walls[i][0]-walls[i][2]))
            let u = ((this.#originX-walls[i][0])*(this.#originY-this.#endPointY)-(this.#originY-walls[i][1])*(this.#originX-this.#endPointX))/((this.#originX-this.#endPointX)*(walls[i][1]-walls[i][3])-(this.#originY - this.#endPointY)*(walls[i][0]-walls[i][2]))
            if(((t<=1)&&(t>=0))&&((u<=1)&&(u>=0))){
                this.#endPointX = this.#originX + (t*(this.#endPointX - this.#originX))
                this.#endPointY = this.#originY + (t*(this.#endPointY - this.#originY))
            }
    
        }
    }
}
