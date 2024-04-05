//아메리카노 4500, 라떼 5000, 아무거나 = 4500
const obj = {
    americano : 4500,
    cafelatte : 5000,
    anything : 4500,
}
function solution(order) {
    var answer = 0;
    order.filter((e,i)=>{
        for(let key in obj){
            if(e.includes(key)) order[i] = obj[key];
        }
    })
    return order.reduce((acc,cur)=>acc+cur,0);
}