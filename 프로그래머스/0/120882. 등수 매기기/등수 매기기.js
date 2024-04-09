// 정렬 하지 않고 찾기.
// Math.max ? 같은값은? 비교 할 수 있어야함
function solution(score) {
    var answer = [];
    score = score.map(e=> (e[0]+e[1])/2);
    for(let i = 0 ; i < score.length;i++){
        let count = 1;
        for(let j = 0; j <score.length;j++){
            if(i===j) continue;
            if(score[i]<score[j]) count++;
        }
        answer.push(count);
    }
    
    return answer;
}