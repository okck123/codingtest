//최소값과 최대값을 곱해라..?
function solution(A,B){
    var answer = 0;
    // 효율성 에러
    // while(A.length>0){
    //     const AMIN = Math.min(...A);
    //     const BMIN = Math.min(...B);
    //     const AMAX = Math.max(...A);
    //     const BMAX = Math.max(...B);
    //     if(AMIN > BMIN){
    //         answer += AMIN * BMAX;
    //         A.splice(A.indexOf(AMIN),1);
    //         B.splice(B.indexOf(BMAX),1);
    //     }else{
    //         answer += BMIN * AMAX;
    //         A.splice(A.indexOf(AMAX),1);
    //         B.splice(B.indexOf(BMIN),1);
    //     }
    // }
    //A는 최솟값 부터 B는 최댓값 부터
    //결국 전체 라인에서 최솟값과 최댓값을 곱해야함
    A.sort((a,b)=> {return a-b;})
    B.sort((a,b)=> {return b-a;})
    answer = A.reduce((acc,cur,i)=>acc + cur*B[i],0);
    return answer;
}