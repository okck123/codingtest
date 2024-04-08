function solution(arr) {
    var answer = arr.reduce((arr,cur)=> arr + cur,0);
    return answer/arr.length;
}