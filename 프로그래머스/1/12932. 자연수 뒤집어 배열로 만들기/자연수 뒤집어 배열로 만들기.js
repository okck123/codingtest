function solution(n) {
    var answer = [...(n+'')].map(e=>Number(e)).reverse();
    return answer;
}