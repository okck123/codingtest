//sides의 a+b<=max가 긴변이거나, max <= long < sides합
function solution(sides) {
    var answer = 0;
    const MAX = Math.max(...sides);
    const MIN = Math.min(...sides);
    for(let i = 1;i<=MAX;i++){
        MIN + i > MAX ? answer++ : '';
    }
    for(let i = MAX+1;i<MAX+MIN;i++){
        answer++;
    }
    return answer;
}