function solution(n) {
    var answer = [...n.toString()].sort((a,b)=>{return b-a}).join('');
    return Number(answer);
}