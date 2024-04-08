function solution(n)
{
    var answer = [...n.toString()].reduce((arr,cur)=>+arr+ +cur,0);

    return answer;
}