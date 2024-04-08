function solution(a, b) {
    var answer = 0;
    const arr = [a,b].sort((a,b)=>{return a-b;});

    if(a===b) return a;
    
    for(let i = arr[0]; i<=arr[1];i++){
        answer += i;
    }
    
    return answer;
}