const displayDay = document.querySelector('.displayDays  p') as HTMLParagraphElement;
const displayHour = document.querySelector('.displayHours p') as HTMLParagraphElement;
const displayMinutes = document.querySelector('.displayMinutes p') as HTMLParagraphElement;
const displaySeconds = document.querySelector('.displaySeconds p') as HTMLParagraphElement;

let countDown:number;

const SECONDS_DAY:number = 86400;
const START_DAY:Date = new Date();
// year month day (month start from zero to eleven) 
const END_DAY:Date = new Date(2023, 6, 29)
// calculate days between START_DAY and END_DAY;
const DAYS_UNTIL_END_DAY = Math.ceil(((END_DAY.getTime() - START_DAY.getTime()) / (1000 * 60 * 60 * 24))); 

const getTime = (secs:number) => {
   const now = Date.now();
   const then = now + (secs*1000)

   displayTime(secs)

   countDown  = setInterval(()=> {
    const secondsLeft = Math.floor((then - Date.now())/1000)
    if(secondsLeft<=0) {
        clearInterval(countDown)
        getTime(SECONDS_DAY*DAYS_UNTIL_END_DAY)
    }
    displayTime(secondsLeft)
},1000)

}

const displayTime = (secs:number) => {
    const remainderseconds = secs%60;
    const minutes = Math.floor(secs/60);
    const hour = Math.floor(minutes/60);
    const days = Math.floor(hour/24);

    displaySeconds.innerHTML = `${remainderseconds < 10? '0':""}${remainderseconds}`;
    displayMinutes.innerHTML = `${minutes > 60 ? minutes.toString().slice(-2):minutes}`;
    displayHour.innerHTML = `${hour>24 ? hour.toString().slice(-2):hour}`;
    displayDay.innerHTML = `${days < 10 ? '0':''}${days}`;

}

getTime(SECONDS_DAY*DAYS_UNTIL_END_DAY)