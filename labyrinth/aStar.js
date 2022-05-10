function aStar(x,y,destinX,destinY){
    let queue = [];
    let explored = []
    //each square syntax = [x,y,valid,path,g,h,f, number in path]
    //path syntax = [previous square]
    //valid: 1y,0n
    x=restrict(x,1,20)
    y=restrict(y,1,20)

    if(x==destinX&&y==destinY){
        return([[destinX,destinY]])
    }

    destinX=restrict(destinX,1,20)
    destinY=restrict(destinY,1,20)
    let originXDistance = Math.abs(x-destinX)
    let originYDistance = Math.abs(y-destinY)
    let originAdjacentCost = (Math.max(originXDistance,originYDistance)-Math.min(originXDistance,originYDistance))*10
    let originDiagonalCost = Math.min(originXDistance,originYDistance)*14
    let originSquare = [x,y,1,"origin",0]
    originSquare.push(originAdjacentCost+originDiagonalCost)
    originSquare.push(originAdjacentCost+originDiagonalCost)
    originSquare.push(0)
    queue.push(originSquare)


    let change = [
        [0,1],[-1,0],[1,0],[0,-1],[-1,1],[1,1],[-1,-1],[1,-1]
    ]
let searching = true;
    while(searching){

        if(queue.length==0){
            return([[destinX,destinY]])
        }

        let focusedSquare = queue.shift()
        explored.push(focusedSquare)
        let focusedNeighbors = [
            [],[],[],
            [],[],[],
            [],[],
        ]
        //cycle through neighbors and generate its data
        //validate it's x and y, if it's alright, send it to queue
        //check if it is the destination (stop searching)
        //send focusSquare from queue to exploredSquares
        for(var i = 0; i<8; i++){
            focusedNeighbors[i].push(focusedSquare[0]+change[i][0])
            focusedNeighbors[i].push(focusedSquare[1]+change[i][1])

            
            //validations below:
            let graphValid = false;
            if(focusedNeighbors[i][0]<=20&&focusedNeighbors[i][1]<=20&&focusedNeighbors[i][0]>=1&&focusedNeighbors[i][1]>=1){
                graphValid = true;
            }

            let stoneValid = true;
            for(var j = 0; j<stone.length; j++){
                if(focusedNeighbors[i][0]==stone[j][0]&&focusedNeighbors[i][1]==stone[j][1]){
                    stoneValid = false;
                }
            }

            let exploredValid = true
            for(var j = 0; j<explored.length; j++){
                if(focusedNeighbors[i][0]==explored[j][0]&&focusedNeighbors[i][1]==explored[j][1]){
                    exploredValid = false;
                }
            }

        if(exploredValid&&stoneValid&&graphValid){
            focusedNeighbors[i][2]=1
        } else {
            focusedNeighbors[i][2]=0
        }
        focusedNeighbors[i][3] = focusedSquare;


        //potentially change/fix!!! HUGE ERROR POTENTIAL

        let pathTotal = 0;
        let subFocus = focusedNeighbors[i][3]
        let sub2Focus = focusedNeighbors[i]
        for(var j = 0; j<focusedNeighbors[i][7]; j++){
            //go through path
            let xChange = Math.abs(sub2Focus[0]-subFocus[0])
            let yChange = Math.abs(sub2Focus[1]-subFocus[1])
            if(xChange==0&&(yChange==1||yChange==-1)){
                pathTotal +=10;
            } else if(yChange==0&&(xChange==1||xChange==-1)){
                pathTotal +=10;
            } else {
                pathTotal +=14
            }
            if(subFocus[3]=="origin"){

            } else {
            sub2Focus = subFocus;
            subFocus = subFocus[3]
            }
        }
 
        

        let currentG = pathTotal;
        let currentH = hCost(focusedNeighbors[i][0],focusedNeighbors[i][1],destinX,destinY)
        let currentF = currentG + currentH;
        
        focusedNeighbors.push(currentG);
        focusedNeighbors.push(currentH);
        focusedNeighbors.push(currentF);

        focusedNeighbors[i][7] = focusedSquare[7]+1




        if(focusedNeighbors[i][0]==destinX&&focusedNeighbors[i][1]==destinY){
            searching = false;
            let Path = extractPath(focusedNeighbors[i])
            return(Path)
        }
        
        let queueValid = true
        for(var q = 0; q<queue.length; q++){
            if(focusedNeighbors[i][0]==queue[q][0]&&focusedNeighbors[i][1]==queue[q][1]){
                if(focusedNeighbors[i][4]>queue[q][4]){
                    queue[q]=focusedNeighbors[i]
                }
                queueValid = false;
            }
        }
        let diagonalValid = true;
        if(i==4){
            if(focusedNeighbors[0][2]==0&&focusedNeighbors[1][2]==0){
                diagonalValid = false;
            }
        } else if(i==5){
            if(focusedNeighbors[0][2]==0&&focusedNeighbors[2][2]==0){
                diagonalValid = false;
            }
        } else if(i==6){
            if(focusedNeighbors[3][2]==0&&focusedNeighbors[1][2]==0){
                diagonalValid = false;
            }
        } else if(i==7){
            if(focusedNeighbors[2][2]==0&&focusedNeighbors[3][2]==0){
                diagonalValid = false;
            }
        }
        if(queueValid&&stoneValid&&graphValid&&exploredValid&&diagonalValid){
            queue.push(focusedNeighbors[i])
        }
        }
            //sort queue:
        queue.sort(function (a,b) { 
            if(a[6]==b[6]){
                return(a[5]-b[5])
            } else {
                return(a[6]-b[6])
            }
         })
    }
}
