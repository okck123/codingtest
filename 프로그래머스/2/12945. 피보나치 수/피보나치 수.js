function fibo(n){
    if(n===0) return 0;
    if(n===1) return 1;
    
    return fibo(n-2) + fibo(n-1);
}
//재귀함수 시간 초과
//배열로 풀어야함
function solution(n) {
    const answer = [0n,1n]
    for(let i=2;i<=n;i++){
        answer[i] = BigInt(answer[i-2] + answer[i-1]);
    }
    return answer[n]%1234567n;
}