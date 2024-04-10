function solution(quiz) {
    var answer = [];
    quiz.forEach(e=>{
        const arr = e.split(' ');
        if(arr[1] === '-'){
            Number(arr[0]) - Number(arr[2]) === Number(arr[4]) ? answer.push('O') : answer.push('X');
        }else{
            Number(arr[0]) + Number(arr[2]) === Number(arr[4]) ? answer.push('O') : answer.push('X');
        }
    })
    return answer

}