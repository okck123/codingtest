const arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
//replace, replaceAll 에 배열넣기?
function solution(s) {
    var answer = 0;
    let count = 0;
    while(isNaN(Number(s))){
        const selectArr = arr[count];
        s = s.replaceAll(selectArr,`${arr.indexOf(selectArr)}`);
        count++;
    }
    return Number(s);
}