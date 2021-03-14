function getSolutions(a, b, c) {
    let discriminant = new Object();
    discriminant.D = Math.pow(b, 2) - (4 * a * c);
    discriminant.roots = [];
    if (discriminant.D < 0) {
        return discriminant;
    } else if (discriminant.D === 0) {
        let x1 = [];
        x1[0] = -b / (2 * a);
        discriminant.roots = x1;
        return discriminant;
    } else if (discriminant.D > 0) {
        let x = [];
        x[0] = (-b + Math.sqrt(discriminant.D)) / (2 * a);
        x[1] = (-b - Math.sqrt(discriminant.D)) / (2 * a);
        discriminant.roots = x;
        return(discriminant);
    }
}

function showSolutionsMessage(a, b, c) {
    let result = new Object();
    result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

function getAverageScore(data) {
    if (data == {}) {
        data.average = 0;
    } else {
        for (let key in data) {
            data[key] = getAverageMark(data[key]);
        }
        data.average = getAverageMark(Object.values(data))
    }
    return data
}

function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    } else {
        let sumMarks = 0;
        for (i = 0; i < marks.length; i++) {
            sumMarks += marks [i];
        }
        return sumMarks / marks.length
    }
}

getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    psysics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
});

function getPersonData(secretData) {
    let personSecretData = {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
    return personSecretData;
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    } else {
        return 'Эмильо';
    }
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));
