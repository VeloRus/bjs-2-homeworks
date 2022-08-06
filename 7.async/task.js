class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id == undefined) {
            throw new Error ("Параметр id не передан")
        }
        if (this.alarmCollection.some((item) => item.id == id)) {
           return console.error("Звонок с заданным id уже существует")
        }
        this.alarmCollection.push({id, time, callback})
    }

    removeClock(id) {
        let collectionLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return collectionLength > this.alarmCollection.length; 
    }

    getCurrentFormattedTime() {
        let todayTime = new Date();
        let hours = todayTime.getHours() < 10 ? `0${todayTime.getHours()}` : `${todayTime.getHours()}`;
        let minutes = todayTime.getMinutes() < 10 ? `0${todayTime.getMinutes()}` : `${todayTime.getMinutes()}`;
        return `${hours}:${minutes}`
    }

   /* start() {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback();
            }
            
            if (this.timerId === null) {
            this.timerId = setInterval(() => { this.alarmCollection.forEach(alarm => checkClock(alarm)) }, 1000);
            }
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }*/

    start() {
        let checkClock = (alarm) => {
            if (alarm.time == this.getCurrentFormattedTime()) {
                return this.alarmCollection.callback()
            }
        }

        if (this.timerId == null) {
            this.timerId = setInterval(this.alarmCollection.forEach((item) => checkClock(item)), 1000)
        }
    }

    stop() {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null
        }
    }


    printAlarms() {
        console.log(`Всего будильников ${this.alarmCollection.length}`)
        this.alarmCollection.forEach(item => console.log(item.id + ':' + item.time))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}


function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock('18:26', () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock('18:27', () => console.log('Пора вставать'), 2);
    phoneAlarm.addClock('18:28', () => {console.log("Вставай уже!"); 
    phoneAlarm.removeClock(2)}, 3);
    phoneAlarm.addClock("18:29", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.stop();
        phoneAlarm.clearAlarms(); 
        phoneAlarm.printAlarms();
      }, 4);
    phoneAlarm.printAlarms();

    phoneAlarm.start();
}
 
testCase();