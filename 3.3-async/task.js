class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Не задан id будильника");
        }
        if (this.alarmCollection.some(currentAlarm => currentAlarm.id === id)) {
            console.error(`Будильник с данным id = ${id} уже существует`)
            return;
        }
        this.alarmCollection.push({id, time, callback});
    }
    removeClock(id) {
        if (this.alarmCollection.findIndex(currentAlarm => currentAlarm.id === id) !== -1) {
            this.alarmCollection = this.alarmCollection.filter(currentAlarm => currentAlarm.id !== id);
            return true;
        }
        return false;
    }
    getCurrentFormattedTime() {
        const date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return `${hours}:${minutes}`;
    }
    start() {
        const checkClock = (currentAlarm) => {
            if (this.getCurrentFormattedTime() === currentAlarm.time) {
                currentAlarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(currentAlarm => console.log(`id: ${currentAlarm.id}, time: ${currentAlarm.time}`));
    }
    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
        this.timerId = null;
    }
}

function testCase () {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock('09:01', () => {console.log('Давай, вставай уже!');phoneAlarm.removeClock(2)}, 2);
    //phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));
    phoneAlarm.addClock('09:02', () => {
        console.log('Вставай, а то проспишь!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    },3);
    //phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}