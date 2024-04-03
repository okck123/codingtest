function solution(s) {
    const arr = [...s];
    let newObj = [];
    
    //key : alpabet, value : count
    arr.forEach(d => {
        if (!newObj.hasOwnProperty(`${d}`)) {
            newObj[d] = 1;
        } else {
            newObj[d]++;
        }
    });
    
    //value가 1인 알파벳만 뽑아옴 
    for (let key in newObj) {
        if (newObj[key] > 1) delete newObj[key];
    }
    //객체의 key를 배열로 받아와 정렬후 형변환한뒤 , 삭제
    let newArr = [...Object.keys(newObj)].sort().toString().replaceAll(',','');

    return newArr;
}