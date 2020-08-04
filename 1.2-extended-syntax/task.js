function getResult(a,b,c){
    "use strict"

    let D = Math.pow(b, 2) - 4 * a * c; // дискрименант
    let x = [];

    if(D < 0) {
        return x;
    } else if (D === 0) {
        x[0] = -b / 2 * a;
        return x;
    } else if (D > 0) {
        x[0] = (-b + Math.sqrt(D)) / (2 * a);
        x[1] = (-b - Math.sqrt(D)) / (2 * a);
        return x;
    }
}

function getAverageMark(marks){
    if(marks.length > 0) {
        if(marks.length > 5) {
            console.log('Количество оценок больше 5');
            marks = marks.slice(0, 5);
        }
        let averageMark = 0;
        for (let i = 0; i < marks.length; i++) {
            averageMark += marks[i] / marks.length;
        }
        return averageMark;
    } else {
        return 0;
    }
}

function askDrink(name,dateOfBirthday){
    let todayDate = new Date();
    todayDate = todayDate.getFullYear();
    let userDate = new Date(dateOfBirthday);
    userDate = userDate.getFullYear();

    let finalDate = todayDate - userDate;

    if(finalDate > 18) {
        let result = `Не желаете ли олд-фэшн, ${name}?`;
        return result;
    } else {
        let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        return result;
    }
}