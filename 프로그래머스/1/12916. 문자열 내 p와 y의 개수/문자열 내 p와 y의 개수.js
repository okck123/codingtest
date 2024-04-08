function solution(s){
    var answer = true;
    let pcount = 0;
    let ycount = 0;

    [...s].forEach(e=>{
        if(e==='p' || e==='P') pcount++;
        if(e==='y' || e==='Y') ycount++;
    })

    return pcount === ycount ? true : false;
}