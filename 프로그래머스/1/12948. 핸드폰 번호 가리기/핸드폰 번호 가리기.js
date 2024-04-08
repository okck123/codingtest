function solution(phone_number) {
    var answer = [...phone_number].fill('*',0,phone_number.length-4).join('');
    return answer;
}