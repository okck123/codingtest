function solution(x) {
    const arr = [...x.toString()].reduce((arr,cur)=> +arr + +cur, 0);

    return x % arr === 0 ? true : false ;
}