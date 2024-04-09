function solution(n, m) {
    const MAX = Math.max(n,m);
    const MIN = Math.min(n,m);
    let max = 0;
    var answer = [];
    for(let i=1;i<=MIN;i++){
        if(MAX%i===0 && MIN%i===0) max = i;
    }
    answer.push(max);
    answer.push(MAX * MIN / answer[0]);
    
    return answer;
}