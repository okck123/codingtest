//name의 점수는 동일 yearning의 동일 인덱스 값
function solution(name, yearning, photo) {
    var answer = [];
    photo.forEach(e=>{
        let sum = 0;
        name.forEach(i=>{
            const iIndex = name.indexOf(i);
            e.find(z => z === i ? sum+=yearning[iIndex]:'')
        })
        answer.push(sum);
    })
    return answer;
}