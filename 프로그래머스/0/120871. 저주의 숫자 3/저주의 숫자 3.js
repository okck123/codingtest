// 3의 배수를 사용하지 않음
// n이 주어졌을때 3의 배수를 사용하지 않으면 어떤 값이 나올까
function solution(n) {
    var answer = 0;
    
    for(let i = 1 ; i<=n;i++){
        answer++;
        while(answer%3 === 0 || answer.toString().includes('3')){
            answer++;
        }
    }
    
    return answer;
}