function solution(l, r) {
    var answer = [];
    let a = false;
    for(l;l<=r;l++){
        if(!/[^05]/g.test(l)) {
            answer.push(l);
            a = true
        }
    }
    
    return !a ? [-1] : answer;
}