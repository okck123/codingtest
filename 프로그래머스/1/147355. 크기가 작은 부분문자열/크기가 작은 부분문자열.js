function solution(t, p) {
    var answer = 0;
    const TLENGTH = t.length;
    const PLENGTH = p.length;
    const arr = [];
    let acc = 0;
    for(let i = 0; i <=TLENGTH-PLENGTH;i++){
        acc = Number(t.slice(i,i+PLENGTH))
        acc - p > 0 ? '' : arr.push(acc);
    }
    return arr.length;
}