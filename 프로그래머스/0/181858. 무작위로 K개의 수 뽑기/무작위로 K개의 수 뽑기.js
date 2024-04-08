//랜덤한 서로 다른 k개의 수를 저장한 배열
//k와 setArr의 길이의 차이에 따라 발생하는 경우의 수
function solution(arr, k) {
    const setArr = new Set();
    let answer = [];
    arr.forEach((e,i)=>{
        setArr.add(e);
    });
    answer = [...setArr].slice(0,k);
    while(answer.length<k){
        answer.push(-1);
    }

   
    
    return answer;
}