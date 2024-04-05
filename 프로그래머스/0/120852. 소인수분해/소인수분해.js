function solution(n) {
    var answer = new Set();
    let count = 2;
    while(true){
        if(n === 1){break;}
        if(n%count === 0){
            answer.add(count);
            n /= count;
        }else{
            count++;
        }
    }
    return [...answer];
}