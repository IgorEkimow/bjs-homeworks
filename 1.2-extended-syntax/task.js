"use strict";

function getResult(a,b,c){
    let D = Math.pow(b, 2) - 4 * a * c;
    let x = [];

    if (D === 0) {
        x[0] = -b / 2 * a;
    } else if (D > 0) {
        x[0] = (-b + Math.sqrt(D)) / (2 * a);
        x[1] = (-b - Math.sqrt(D)) / (2 * a);
    }
    return x;
}

function getAverageMark(marks){
    if(marks.length === 0) {
        return 0;
    }
    if(marks.length > 5) {
        console.log('Количество оценок больше 5');
        marks = marks.slice(0, 5);
    }
    let averageMark = 0;
    for (let i = 0; i < marks.length; i++) {
        averageMark += marks[i] / marks.length;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let finalDate = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if(finalDate > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}