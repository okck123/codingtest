function solution(A, B) {
    var answer = 0;
    let count = 0;
    const ALENGTH = A.length;
    while(count<ALENGTH){
        if(A===B){return answer;}
        let aArr = [...A];
        const lastString = aArr[ALENGTH-1];
        aArr.pop();
        aArr = aArr.join('');
        A = lastString+aArr;
        answer++;
        count++;
    }
    return -1;
}