function solution(array, n) {
    //n과의 차를 구해서 절댓값으로 새로운 arr 완성
    const newArr = array.sort((a,b)=>{return a-b;}).map(d => Math.abs(n-d));

    //newArr의 최솟값을 구함
    const smallData = Math.min(...newArr);

    //가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
    //이미 오름차순 정렬이 되있기 때문에 가장 먼저 나오는 인덱스만 찾으면됨
    let index = 0;
    
    for(let i = 0 ; i < newArr.length; i++){
        if(newArr[i] === smallData){
            index = i;
            break;
        }
    }


    return array[index];
    
}