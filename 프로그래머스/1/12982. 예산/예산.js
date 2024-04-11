//최대한 많은 부서의 물품을 구매
//부서가 신청한 금액을 모두 지원
//금액 d 예산 budget 최대 몇 개의 부서에 물품을 지원?
function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    // 전체 신청금액이 예산보다 작거나 같을때
    // if(d.reduce((acc,cur)=>acc+cur,0) <= budget) return d.length;
    
    //오름차순으로 금액을 정렬하여 작은 값부터 더하자
    d = d.sort((a,b)=> a-b);

    d.forEach(e=>{
        if(e+sum<=budget){
            sum += e;
            answer++;
        }
    })
    
    
    
    return answer;
}