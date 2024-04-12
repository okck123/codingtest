const arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
const num = ['0','1','2','3','4','5','6','7','8','9']
//replace, replaceAll 에 배열넣기?
function solution(s) {
    var answer = 0;
    while(isNaN(Number(s))){
        s = s.replaceAll(arr[0],num[0]);
        s = s.replaceAll(arr[1],num[1]);
        s = s.replaceAll(arr[2],num[2]);
        s = s.replaceAll(arr[3],num[3]);
        s = s.replaceAll(arr[4],num[4]);
        s = s.replaceAll(arr[5],num[5]);
        s = s.replaceAll(arr[6],num[6]);
        s = s.replaceAll(arr[7],num[7]);
        s = s.replaceAll(arr[8],num[8]);
        s = s.replaceAll(arr[9],num[9]);
    }
    return Number(s);
}