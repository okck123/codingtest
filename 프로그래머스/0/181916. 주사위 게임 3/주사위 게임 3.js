// 경우의수
// 1. a = b = c = d 12
// 2. 4개중 3개가 같을때 9
// 3. 두개씩 같은값 나올때 a=b / c=d  a != b 8
// 4. 두개는 같은데 같은것과 나머지 두개의 값이 모두 다름 7
// 5. 다 다름 6
// -> sort 와 lastIndexOf?
function solution(a, b, c, d) {
    var answer = [a,b,c,d].sort((a,b)=>{return a-b;});
    const arr = [];
    let count = 0;
    answer.forEach(e=>{
        arr.push(answer.lastIndexOf(e));
        count += answer.lastIndexOf(e);
    })
    switch(count){
        case 12:
            return 1111 * answer[0];
        case 9:
            //aaab,abbb
            if(arr[0] === 0){
                return (10 * answer[1] + answer[0])**2;
            }else{
                return (10 * answer[0] + answer[3])**2;
            }
        case 8:
            return (answer[0] + answer[2]) * Math.abs(answer[0] - answer[2]);
        case 7:
            //1123 1223 1233
            if(arr[0]===1){
                return answer[2] * answer[3];
            }else if(arr[1]===2){
                return answer[0] * answer[3];
            }else if(arr[2]===3){
                return answer[0] * answer[1];
            }
        case 6:
            return answer[0];
    }
}