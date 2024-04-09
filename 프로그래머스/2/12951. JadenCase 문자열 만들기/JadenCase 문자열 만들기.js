function solution(s) {
    var answer = s.toLowerCase().split(' ').map(e =>{
        return e? e[0].toUpperCase() + e.slice(1):'';
    }).join(' ');
    return answer;
}