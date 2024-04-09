function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0 ; i<arr1.length;i++){
        answer[i] = [];
        for(let j = 0; j<arr1[i].length;j++){
            answer[i].push(arr1[i][j]+arr2[i][j])
        }
        // console.log([arr1[i][0]+arr2[i][0],arr1[i][1]+arr2[i][1]]);
    }
    // console.log(arr1.length,arr1[0].length)
    
    return answer;
}