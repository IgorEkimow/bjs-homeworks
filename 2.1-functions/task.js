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
    data.average = getAverageMark(data);
    return data;
}

function getAverageMark(marks) {
    let counter = 0;
    for (let key in marks) {
        counter++;
    }
    let average = 0;
    for (let key in marks) {
        let sum = 0;
        for (let i = 0; i < marks[key].length; i++) {
            sum += marks[key][i] / marks[key].length;
            average += (marks[key][i] / marks[key].length) / counter;
        }
        marks[key] = sum;
    }
    marks.average = average;
    return marks.average;
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
    return getDecodedValue(secretData);
}

function getDecodedValue(secretData) {
    let obj = new Object;
    if(secretData === 0) {
        return 'Родриго';
    }
    if(secretData === 1) {
        return 'Эмильо';
    }
    for(let key in secretData) {
        if(key == 'aaa') {
            if(secretData[key] == 0) {
                obj.firstName = 'Родриго';
            } else if (secretData[key] == 1){
                obj.firstName = 'Эмильо';
            }
        } else if (key == 'bbb') {
            if(secretData[key] == 0) {
                obj.lastName = 'Родриго';
            } else if (secretData[key] == 1){
                obj.lastName = 'Эмильо';
            }
        }
    }
    return obj;
}

getPersonData({aaa: 0, bbb: 0});
getPersonData({aaa: 1, bbb: 0});
getPersonData({aaa: 0, bbb: 1});
getPersonData({aaa: 1, bbb: 1});