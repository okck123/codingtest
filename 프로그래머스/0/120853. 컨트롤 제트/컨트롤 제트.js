
function solution(s) {
    var answer = 0;
    let arr = [];
    s.split(' ').forEach(e=>{
        e === 'Z' ? arr.pop() : arr.push(+e);
    })
    return arr.reduce((acc,cur)=> acc+cur,0);
}