function solution(s){  
    // let prev = s;
    // let a = s.replaceAll('()','');
    // while(true){
    //     if(a === '') return true;
    //     if(prev === a) return false;
    //     prev = a;
    //     a = a.replaceAll('()','');
    // }
    // (,)의 갯수가 같은지 본다?
    let count = 0;
    for(let i = 0; i <s.length;i++){
        s[i] === '(' ? count++ : count--;
        if(count<0) return false;
    }
    return count === 0;
}