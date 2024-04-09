function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0 ; i<arr1.length;i++){
        const arr = [];
        for(let j = 0; j<arr1[i].length;j++){
            arr.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(arr);
        // console.log([arr1[i][0]+arr2[i][0],arr1[i][1]+arr2[i][1]]);
    }
    // console.log(arr1.length,arr1[0].length)
    
    return answer;
}