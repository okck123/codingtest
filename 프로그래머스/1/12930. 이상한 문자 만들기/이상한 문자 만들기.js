//index 짝수 => 대문자
//index 홀수 => 소문자
//공백을 기준으로 index는 초기화됨
function solution(s) {
    let index = 0;
    var answer = s.split('').map(e=>{
            if(e === ' '){
                index = 0;
            }else{
                if(index%2===0){
                    e = e.toUpperCase();
                    index++;
                }else{
                    e = e.toLowerCase();
                    index++;
                    
                }
            }
            return e;
        }).join('');
    
    
    // s.split('').forEach(e=>{
    //     if(e === ' '){
    //         answer += e;
    //         index = 0;
    //     }else{
    //         index%2===0 ? answer += e.toUpperCase() : answer += e.toLowerCase();
    //         index++;
    //     }
    // })
    return answer;
}