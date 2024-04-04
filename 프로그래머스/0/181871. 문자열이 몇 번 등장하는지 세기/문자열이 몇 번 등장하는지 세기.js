function solution(myString, pat) {
    //myString안에 pat이 있으면 count++ 하고 myString 정리<-정리 하려니 조건이 너무 많음
    //pat의 index시작이 0,0이 아닐때로 구분
    
    var count = 0;
    for(let i = 0; i<myString.length;i++){
        if(!myString.includes(pat)) break;
        const target = myString.slice(i,i+pat.length);
        if(target.includes(pat)) count++;
        
    }
    //
    return count;
}