//answer[0] : x , answer[1] : y
//x,y의 값이 Math.abs(board[0]-1/2),Math.abs(board[1]-1/2) 커지게 되면 연산 수행 안함
function maxCheck(MAX,checkvalue){
    return MAX > Math.abs(checkvalue) ? true : false ;
}

function solution(keyinput, board) {
    var answer = [0,0];
    let xcheck = 0;
    let ycheck = 0;
    const XMAX = (board[0]-1)/2;
    const YMAX = (board[1]-1)/2
    keyinput.forEach(e=>{
        switch(e){
            case 'left' :
                answer[0]--;
                xcheck = -1;
                break;
            case 'right' :
                answer[0]++;
                xcheck = 1;
                break;
            case 'up' :
                answer[1]++;
                ycheck = 1;
                break;
            case 'down' :
                answer[1]--;
                ycheck = -1;
                break;
        }
        if(!maxCheck(XMAX,answer[0])){
            xcheck === 1 ? answer[0] = XMAX : answer[0] = -XMAX;
        }
        if(!maxCheck(YMAX,answer[1])){
             ycheck === 1 ? answer[1] = YMAX : answer[1] = -YMAX;
        }
    })
    return answer;
}