// [] -> arr[i] => answer.push i++
// ![] && answer[answer.length-1] === arr[i] => answer[answer.length-1].pop(), i++
// ![] && answer[answer.length-1] !== arr[i] => answer.push(arr[i]) i++
function solution(arr) {
    var answer = [];
    arr.forEach((e,i)=>{
        const checkval = answer[answer.length-1];
        if(answer.length === 0){
            answer.push(e);
        }
        else{
            if(e === checkval){
                answer.pop();
            }else{
                answer.push(e);
            }
        }
        
    })
    return answer.length === 0 ? [-1] : answer;
}