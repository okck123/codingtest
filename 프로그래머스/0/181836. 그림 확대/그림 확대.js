//안에 요소도 k배씩 증가하고 증가한 요소도 k배씩 배열에 넣어야함
function solution(picture, k) {
    const arr = [];
    picture.forEach(e=>{
        let answer = '';
        e.split('').forEach(i=>{
            answer += i.repeat(k);
        })
        for(let j = 0; j<k;j++){
            arr.push(answer);
        }
    })
    
    return arr;
}