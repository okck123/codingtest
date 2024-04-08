function solution(strArr) {
    var answer = {};
    strArr.forEach(e=>{
        if(Object.hasOwn(answer,e.length)){
            answer[e.length]++;
        }else{
            answer[e.length] = 1;
        }
    })
    return Math.max(...Object.values(answer));
}