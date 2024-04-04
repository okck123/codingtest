function solution(myString, pat) {
    //원본으로 제시된 데이터를 분해하고 재결합 하는 행위를 줄여야 한다.
    //문제의 의도를 정확히 파악하자
    var count = 0;
   
    for(let i = 0; i<myString.length;i++){
        if(!myString.includes(pat)) break;
        const target = myString.slice(i,i+pat.length);
        if(target.includes(pat)) count++;
        
    }
    //
    return count;
}
