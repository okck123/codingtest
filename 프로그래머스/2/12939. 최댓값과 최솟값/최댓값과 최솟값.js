function solution(s) {
    var answer = s.split(' ').map(e=>Number(e));
    return `${Math.min(...answer)} ${Math.max(...answer)}`;
}