//index number = real number
const NUMBER = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const NUMBERLENGTH3 = 3;
const NUMBERLENGTH4 = 4;
const NUMBERLENGTH5 = 5;
const STARTZ = 'z';
const STARTO = 'o';
const STARTE = 'e';
const STARTN = 'n';
const STARTT = 't';
const STARTF = 'f';
const STARTS = 's';
const STARTTW = 'tw';
const STARTTH = 'th';
const STARTSI = 'si';
const STARTSE = 'se';

//z = zero 4
//o = one 3
//e = eight 5 
//n = nine 4
//t = two 3,three 5
//f = four 4,five 4
//s = six 3,seven 5

function changeNumber(answer, number, length) {
    answer += NUMBER.indexOf(number.slice(0, length));
    number = number.slice(length);
    return [answer,number];
}

function solution(numbers) {    
    let answerString = '';
    let firstString = '';
    while (numbers.length > 2) {
        switch (numbers[0]) {
            case STARTZ:
            case STARTN:
                firstString = numbers[0];
                [answerString,numbers]= changeNumber(answerString, numbers, NUMBERLENGTH4);
                break;
            case STARTO:
                firstString = numbers[0];
                [answerString,numbers] = changeNumber(answerString, numbers, NUMBERLENGTH3);
                break;
            case STARTE:
                firstString = numbers[0];
                [answerString,numbers] = changeNumber(answerString, numbers, NUMBERLENGTH5);
                break;
            case STARTF:
                firstString = numbers.slice(0, 2);
                [answerString,numbers] = changeNumber(answerString, numbers, NUMBERLENGTH4);
                break;
            case STARTT:
            case STARTS:
                firstString = numbers.slice(0, 2);
                if (firstString === STARTTH || firstString === STARTSE) {
                    [answerString,numbers] = changeNumber(answerString, numbers, NUMBERLENGTH5);
                } else {
                    [answerString,numbers] = changeNumber(answerString, numbers, NUMBERLENGTH3);
                }
                break;
        }
    }
    return Number(answerString);
}


