// 1의 규칙 1, 2, 3, 4, 5
// 2의 규칙 2, 1, 2, 3, 2, 4, 2, 5
// 3의 규칙 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
// 문제의 정답이 배열로 주어졌을때 많이 맞춘사람은?
// answers의 인덱스 요소가 one,two,three에서 동일한 요소를 가리킬려면?
const one = [1, 2, 3, 4, 5]
const two = [2, 1, 2, 3, 2, 4, 2, 5]
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
function solution(answers) {
    var answer = [];
    let o = tw = th = 0;
    for(let i = 0; i < answers.length;i++){
        if(answers[i]===one[i%one.length]) o++;
        if(answers[i]===two[i%two.length]) tw++;
        if(answers[i]===three[i%three.length]) th++;
    }
    const max = Math.max(o,tw,th);
    if(max === o) answer.push(1);
    if(max === tw) answer.push(2);
    if(max === th) answer.push(3);
    
    return answer;

}