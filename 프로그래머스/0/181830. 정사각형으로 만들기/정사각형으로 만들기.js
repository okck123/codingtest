function solution(arr) {
    const row = arr[0].length;
    const column = arr.length;
    const rmc = row - column;
    var answer = [[]];
    if(rmc === 0) return arr;
    if(rmc > 0){
        const temp = [];
        for(let i = 0; i<row;i++){
            temp.push(0);
        }
        for(let i = 0 ; i<rmc;i++){
            arr.push(temp);
        }
    }
    else if(rmc < 0){
        arr.forEach(e=>{
            for(let i=0; i<Math.abs(rmc);i++){
                e.push(0);
            }
        })
    }
    
    return arr;
}