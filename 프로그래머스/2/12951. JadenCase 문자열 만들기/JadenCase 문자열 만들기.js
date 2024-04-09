function solution(s) {
    var answer = s.toLowerCase().split(' ').map(e =>{
        return e.charAt(0).toUpperCase() + e.slice(1);
    }).join(' ');
    return answer;
}