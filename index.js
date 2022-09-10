// timer = ()=> {
//     const countDown = new Date("Nov 20, 2022 24:00:00").getTime();
//     const currentTime = new Date().getTime();
//     let expectedTime = countDown-currentTime;

//     const myDays = expectedTime-(date.getDay());
//     const myHour = expectedTime-(date.getHours());
//     const myMinutes = expectedTime-(date.getMinutes());
//     const mySeconds = expectedTime-(date.getSeconds());
//     days.innerHTML = `${myDays}`
//     hrs.innerHTML = `${myHour}`
//     mins.innerHTML = `${myMinutes}`
//     secs.innerHTML = `${mySeconds}`
// }
// setInterval(timer, 1000)

var countDownDate = new Date("Nov 20, 2022 24:00:00").getTime();
timer = ()=> {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var myDays = timeFormat (Math.floor(distance / (1000 * 60 * 60 * 24)));
    var myHour = timeFormat (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var myMinutes = timeFormat (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var mySeconds = timeFormat (Math.floor((distance % (1000 * 60)) / 1000));
    days.innerHTML = `${myDays}`
    hrs.innerHTML = `${myHour}`
    mins.innerHTML = `${myMinutes}`
    secs.innerHTML = `${mySeconds}`
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}
setInterval(timer, 1000)

const timeFormat = (timer) =>{
    if(timer<10){
        return '0'+timer
    }else{
        return timer
    }
}