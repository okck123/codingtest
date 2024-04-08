function fact(num){
    if(num < 1){return 1;}
    return num * fact(num-1);
}

function solution(balls, share) {
    var answer = Math.round(fact(balls) / (fact(balls-share) * fact(share)));
    return answer;
}