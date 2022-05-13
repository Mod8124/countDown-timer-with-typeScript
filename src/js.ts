const displayDay = document.querySelector('.displayDays  p') as HTMLParagraphElement;
const displayHour = document.querySelector('.displayHours p') as HTMLParagraphElement;
const displayMinutes = document.querySelector('.displayMinutes p') as HTMLParagraphElement;
const displaySeconds = document.querySelector('.displaySeconds p') as HTMLParagraphElement;

let countDown:any;

const getTime = (secs:number) => {
   const now = Date.now();
   const then = now + (secs*1000)

   displayTime(secs)

   countDown  = setInterval(()=> {
    const secondsLeft = Math.floor((then - Date.now())/1000)
    if(secondsLeft<=0) {
        clearInterval(countDown)
        getTime(86400*14)
    }
    displayTime(secondsLeft)
},1000)


}

const displayTime = (secs:number) => {
    const remainderseconds = secs%60;
    const minutes = Math.floor(secs/60);
    const hour = Math.floor(minutes/60);
    const days = Math.floor(hour/24);

    console.dir(minutes)

    displaySeconds.innerHTML = `${remainderseconds < 10? '0':""}${remainderseconds}`;
    displayMinutes.innerHTML = `${minutes > 60 ? minutes.toString().slice(-2):minutes}`;
    displayHour.innerHTML = `${hour>24 ? hour.toString().slice(-2):hour}`;
    displayDay.innerHTML = `${days < 10 ? '0':''}${days}`;

}

getTime(86400*14)