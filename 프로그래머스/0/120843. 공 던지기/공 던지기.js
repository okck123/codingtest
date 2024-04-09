function solution(numbers, k) {
    // var answer = [...numbers];
    // while(answer.length<2*k+1){
    //     answer = [...answer,...numbers];
    // }
    return numbers[2*(k-1)%numbers.length];
}