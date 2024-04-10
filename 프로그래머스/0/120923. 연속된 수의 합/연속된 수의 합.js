//연속된 수 이므로 등차가 1인 등차수열의 합을 구하자
//Sn = (a1 + an) / 2 * n
//Sn = (2a1 + (n-1)d) * num/2
//total = (a1 + an) / 2 * num;
//total = (2a1 + (num-1)d) * num/2;
// 12 = (2a1 + 2*1)3/2;
// 12 = 3a1 + 3;
// 4 = a1+1;
// a1 = 3;
function solution(num, total) {
    var answer = [];
    let a1 = total / num - (num-1)/2;
    for(let i = 0; i<num;i++){
        answer.push(a1);
        a1++;
    }
    return answer;
}