function solution(my_str, n) {
 var answer = [];
    const index = my_str.length/n;
    for(let i = 0; i<index;i++){
        my_str.length > n ? 
            answer.push(my_str.slice(0,n)) :
            answer.push(my_str);
        my_str = my_str.slice(n);
    }
    return answer;
}