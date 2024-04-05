function countString(obj,arr){
    arr.forEach(e=>{
        if(!obj.hasOwnProperty(e)){
            obj[e] = 1;
        }else{
            obj[e]++;
        }
    })
    return obj;
}

function solution(before, after) {
    const objbefore = new Object();
    const objafter = new Object();
    let answer = true;
    countString(objbefore,[...before]);
    countString(objafter,[...after]);
    for(let i in objbefore){
        if(objbefore[i] !== objafter[i]){
            answer = false;
            return +answer;
        }
    }
    return +answer;
}