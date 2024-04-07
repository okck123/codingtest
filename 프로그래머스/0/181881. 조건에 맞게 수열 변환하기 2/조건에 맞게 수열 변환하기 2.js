// 1. 현재 arr을 저장할 arr이 필요함
// 2. 현재 arr과 prev arr이 같아지는 시점의 count값을 반환하자
// 3. 전체 배열의 값들이 다 변해야 하니 map 사용
function solution(arr) {
    var answer = -1;
    let prevarr = [];
    while(prevarr.join('')!==arr.join('')){
        prevarr = [...arr];
        arr = arr.map(e=>{
            if(e>=50 && e%2===0){
                e/=2;
            }
            if(e<50 && e%2 === 1){
                e = e*2;
                e++;
            }
            return e;
        })
        answer++;
    }
    return answer;
}