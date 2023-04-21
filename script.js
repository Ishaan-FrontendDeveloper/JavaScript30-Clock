let timeout=null;
function Time(){
    let hourHand=document.getElementById('hours');
    let minuteHand=document.getElementById('minutes');
    let clock=document.getElementById('clockface');

    let curDate=new Date();
    let curHours= curDate.getHours();
    let curMinutes=curDate.getMinutes();
    if(curHours>12){
        curHours-=12;
    }
    let hours=180+curHours*30;
    let minutes=180+((curMinutes/5)*30);
    hourHand.style.transform = `rotate(${hours}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    console.log(hours,minutes);
}
clearTimeout();
setTimeout(Time(),60000);

   
