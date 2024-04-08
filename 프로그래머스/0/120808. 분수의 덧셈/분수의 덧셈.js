function solution(n1, d1, n2, d2) {
    var answer = [];
    let numer = n1*d2 + n2*d1;
    let denom = d1*d2;
    let gcd = 1;
    
    for(i=1;i<=Math.min(numer,denom);i++){
        if(numer % i === 0 && denom % i === 0){
            gcd = i;
        }
    }
    answer.push(numer/gcd);
    answer.push(denom/gcd);

    return answer;
}