function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false;
    var answer = !/[a-zA-Z]/.test(s);
    return answer;
}