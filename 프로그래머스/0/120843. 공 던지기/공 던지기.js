function solution(numbers, k) {
    var answer = [...numbers];
    while(answer.length<2*k+1){
        answer = [...answer,...numbers];
    }
    return answer[2*(k-1)];
}