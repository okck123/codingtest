function solution(arr) {
    const min = Math.min(...arr);
    arr = arr.filter(e => e > min);
    return arr.length > 0 ? arr : [-1];
}