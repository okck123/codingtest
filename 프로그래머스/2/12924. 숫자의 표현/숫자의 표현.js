// n을 연속한 자연수의 덧셈으로 표현후
// 그 갯수를 반환해라.
function solution(n) {
    var answer = 0;

    //시간 초과 n으로 작업시
    for(let i = 0; i<=Math.ceil(n/2);i++){
        let sum = 0;
        for(let j = i+1; j<=n;j++){
            if(sum > n) {break;}
            else if(sum < n){sum+=j;}
            else{
                answer++; 
                break;
            }
        }
    }

    return ++answer;
    
}