//answer 은 n 보다 큰 자연수
//answer의 2진수의 1의 개수와 n 의 2진수의 1의 개수가 같다.
function solution(n) {
    const NCOUNT = n.toString(2).replaceAll('0','').split('').length;
    var answer = n;
    while(true){
        answer++;
        const NEWCOUNT = answer.toString(2).replaceAll('0','').split('').length;
        if(NEWCOUNT===NCOUNT) return answer;
    }
    return NCOUNT;
}