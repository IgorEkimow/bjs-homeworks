String.prototype.isPalindrome = function() {
    let str = this.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += Number(marks[i]);
    }
    const average = sum/marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now  = new Date();
    const birth = new Date(birthday);
    const diff = now - birth;
    const age = diff / (1000 * 60 * 60 * 24 * 365.242);
    const result = age > 18 ? true : false;
    return result;
}