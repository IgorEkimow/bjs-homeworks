'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    if(isNaN(percent)) {
        return `Параметр percent содержит неправильное значение ${percent}`;
    }
    if(isNaN(contribution)) {
        return `Параметр contribution содержит неправильное значение ${contribution}`;
    }
    if(isNaN(amount)) {
        return `Параметр amount содержит неправильное значение ${amount}`;
    }

    let creditYear = new Date(date).getFullYear(),
        creditMonth = new Date(date).getMonth() + 1,
        nowYear = new Date().getFullYear(),
        nowMonth = new Date().getMonth() + 1;

    let totalMonths = ((creditYear - nowYear) * 12) + (creditMonth - nowMonth);

    let totalAmount;
    if(!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
        percent = percent / 100;
        let paymentPerMonth = ((amount - contribution) * ((percent / 12) + (percent / 12) / (((1 + (percent / 12)) ** totalMonths) - 1)));
        totalAmount = +(paymentPerMonth * totalMonths).toFixed(2);
    }
    return totalAmount;
}

function getGreeting(name) {
    if(name === 'undefined' || name === 'null' || name === undefined || name === null || name.length <= 0) {
        return (`Привет, мир! Меня зовут ${name || "Аноним"}`);
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}