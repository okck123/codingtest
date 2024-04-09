// answer 마지막 값이랑 현재 넣을값만 비교하면됨
function solution(arr)
{
    var answer = [arr[0]];

    arr.forEach(e=>{
        answer[answer.length-1] === e ? '':answer.push(e);
    })
    
    return answer;
}