function solution(n) {
    var answer = [...n.toString(3)].reverse().join('');
    
    return parseInt(answer,3);
}