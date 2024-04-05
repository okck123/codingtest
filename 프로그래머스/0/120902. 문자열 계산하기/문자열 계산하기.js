function solution(my_string) {
    let answer = 0;
    const arr = my_string.split(' ');
    let operater = '+';
    arr.forEach(i=>{
        if(isNaN(parseInt(i))){
            operater = i;
        }else{
            operater === '+' ? answer+=parseInt(i) : answer-=parseInt(i);
        }
    })
    return answer;
}   