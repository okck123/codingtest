function solution(emergency) {
    //큰 정수 일수록 emergency가 높다.
    var answer = [];
    
    emergency.forEach(d => {
        let upCount = 1;
        let num = d;
        for (let i = 0; i < emergency.length; i++) {
            if (num < emergency[i]) {
                upCount++;
            }
        }
        answer.push(upCount);
    })
    
    return answer;
}