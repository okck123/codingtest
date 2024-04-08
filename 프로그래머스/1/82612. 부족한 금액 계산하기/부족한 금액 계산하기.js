function solution(price, money, count) {
    var answer = 0;
    for(let i = 1;i<=count;i++){
        answer += i * price;
    }

    return money - answer > 0 ? 0 : answer-money ;
}