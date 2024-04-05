function solution(myString, pat) {
    const index = myString.lastIndexOf(pat);
    const answer = myString.slice(0,index+pat.length);
    return answer;
}