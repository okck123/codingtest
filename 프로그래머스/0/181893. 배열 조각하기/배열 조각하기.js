// i 짝수 arr.slice(0,query[i])
// i 홀수면 arr(query[i]);
function solution(arr, query) {
    var answer = [];
    query.forEach((e,i)=>{
        i%2===0 ? arr = arr.slice(0,e+1) : arr = arr.slice(e);
    })
    return arr;
}