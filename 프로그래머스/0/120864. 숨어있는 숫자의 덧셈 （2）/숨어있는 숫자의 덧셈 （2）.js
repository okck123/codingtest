function solution(my_string) {
    //정규식?
    const arr = [...my_string];
    const newArr = [];
    let num = '';
    ///[0-9]/
    arr.forEach(a=>{
        if(/[0-9]/.test(a)){
            num = num + a;
        }
        else{
            //숫자이후에 알파벳나오면 배열에 담고 초기화
            //숫자가 마지막일때 문제발생
            if(num !== '') {newArr.push(parseInt(num));}
            num = '';
        }
    })
    if(num !== '') {newArr.push(parseInt(num));}
    //배열의 합 구하기
    const sum = newArr.reduce((arr,cur)=>{
        return arr + cur;
    },0)

    return sum;
}