function solution(s) {
    var answer = 0;
    s.slice(0,1) === '-' ? answer = Number(s.slice(1)) * -1 : answer = Number(s)
    return answer;
}