//일정한 거리만큼 다른 알파벳으로 바꾼다.
//s 문자열 n 거리
//마지막 문자인 z에서는 a로 돌아간다.
//String.charCodeAt()
//String.fromCharCode(아스키코드)
//A = 65
//Z = 90
//a = 97
//z = 122
// a / n = 1
// 97 98
// 122 97

function solution(s, n) {
    const a = 97;
    const A = 65;
    const z = 122;
    const Z = 90;
    var answer = s.split('');
    answer = answer.map(e=>{
        if(e===' ') return e;
        const ascll = e.charCodeAt();

        if(ascll >= A && ascll <= Z){
            e = String.fromCharCode((ascll-A+n)%26 + A);
        }
        else if(ascll >= a && ascll <= z){
            e = String.fromCharCode((ascll-a+n)%26 + a);
        }
        return e;
    }).join('');
    return answer;
}