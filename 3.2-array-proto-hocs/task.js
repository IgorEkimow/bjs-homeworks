function sleep(milliseconds)
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    const array1 = Array.from(arr1);
    const array2 = Array.from(arr2);
    return array1.length === array2.length && array1.every((element, i) => element === array2[i]);
}

function memorize(fn, limit) {
    const memory = [];
    return function () {
        const element = memory.find(element => compareArrays(element.args, arguments));
        if (element !== undefined) {
            return element.result;
        }
        let result = fn(...arguments);
        memory.push({args: arguments, result});
        if (memory.length >= limit) {
            memory.unshift();
        }
        return result;
    }
}