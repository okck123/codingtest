function solution(chicken) {
    let answer = 0;
    let coupon = 0;
    while(chicken>10){
        answer = answer + chicken/10;
        coupon = coupon + chicken%10;
        chicken/=10;
    }
    if(chicken+coupon>=10) answer++;
    return Math.floor(answer);
}