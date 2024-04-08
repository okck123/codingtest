// width Math.abs([1][0]x2-[0][0]x1) heigth [3][1]y4-[0][1]y1
function solution(dots) {
    dots.sort((a,b)=>a[0] - b[0]);
    var answer = Math.abs(dots[2][0] - dots[1][0]) * Math.abs(dots[1][1] - dots[0][1]);
    return answer;
}