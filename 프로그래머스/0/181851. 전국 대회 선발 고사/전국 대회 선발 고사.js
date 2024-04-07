//3명의 학생을 선발
//등수로 선발해야 하나 참여 못하는 경우 발생함
//a 1등 b 2등 c 3등의 index
//indexOf()
//10000a + 100b + c
// 1. true인 애들만 따로 뽑아서 새로운 arr에 저장하고
// 2. sort 돌려서 1,2,3위만 뽑아옴 (0,1,2)
// 3. 기존 arr에 indexOf 확인해서 번호가지고 와서
// 4. 값 전달

function solution(rank, attendance) {
    var answer = [];
    let a,b,c = 0;
    rank.forEach((e,i)=>{
        if(attendance[i] === true) answer.push(e);
    })
    answer = answer.sort((a,b)=>{return a-b}).slice(0,3);
    a = rank.indexOf(answer[0]);
    b = rank.indexOf(answer[1]);
    c = rank.indexOf(answer[2]);
    
    return 10000 * a + 100 * b + c;
}