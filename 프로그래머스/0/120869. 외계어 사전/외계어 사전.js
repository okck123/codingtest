function solution(spell, dic) {
    var answer = 2;
    dic = dic.map(e=>{
        if(e.length === spell.length) return e;
        else return 0;
    }).filter(e=>e!==0);
    dic.forEach(i=>{
        let count = 0;
        spell.forEach(j=>{
            if(i.includes(j)){
                count++;
            }
        })
        if(count === spell.length) answer = 1;
    })
    return answer;
}