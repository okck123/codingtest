//기약분수를 만들고
//gcd를 만들자
//분모를 소인수분해 한 값이 2,5만 있어야함
const gdc = (a,b)=>{
    while(b) [a,b] = [b,a%b];
    return a;
}
function solution(a, b) {
    const squrB = Math.sqrt(b);
    var answer = [];
    const gdcValue = gdc(a,b);
    b /= gdcValue;
    let index = 2;
    while(b>1){
        if(b%index===0){
            answer.push(index);
            b/=index;
        }
        else{
            index++;
        }
        if (index > squrB) { answer.push(b); break; }
    }
    answer = answer.filter(e=>e!=2).filter(e=>e!=5)
    
    return answer.length>0 ? 2 : 1;
}