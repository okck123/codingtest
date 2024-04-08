function solution(i, j, k) {
    var answer = 0;
    const check = k.toString();
    
    for(let index = i; index<=j; index++){
        const arr = [...index.toString()];
        arr.forEach(e=>{
            e.includes(check) ? answer++ : 0;
        })
    }
    return answer;
}