// 이진 변환 횟수,0이 제거된 횟수
function solution(s) {
    let removeZeroCount = 0;
    let changeCount = 0;
    while(s!=='1'){
        changeCount++;
        while(s.includes('0')){
            removeZeroCount++;
            s = s.replace('0','');
        }
        s = s.length.toString(2);
    }
    

    return [changeCount,removeZeroCount];
}