function solution(arr) {
    let count = 1;
    while(true){
        if(count >= arr.length) break;
        count *= 2;
    }
    const prevLength = arr.length;
    arr.length = count;
    return arr.fill(0,prevLength,arr.length);
}