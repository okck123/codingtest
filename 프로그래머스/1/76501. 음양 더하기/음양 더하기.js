function solution(absolutes, signs) {
    var answer = absolutes.map((e,i)=>{
        return signs[i] ? e : e * -1;
    }).reduce((acc,cur)=>acc+cur,0);
    return answer;
}