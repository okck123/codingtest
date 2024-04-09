function solution(left, right) {
    let num = 0;
    for(let i = left; i<=right; i++){
        const answer = new Set();
        for(let j = 1; j<=Math.sqrt(i);j++){
            if(i%j===0){
                answer.add(j);
                answer.add(i/j);
            }
        }
        answer.size%2 === 0 ? num += i : num -= i;
    }
    return num;
}