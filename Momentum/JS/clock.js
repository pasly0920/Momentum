const clock = document.querySelector(".timeline");
const ampm = document.querySelector(".ampm");

function getClock(){
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    if(date.getHours()>12)
    {
        const origin_hours=date.getHours()-12;
        ampm.innerText ="pm"
        const hours = String(origin_hours).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
    else
    {
        const hours = String(date.getHours()).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
}
getClock();//이를 실행함에 따라 시작하고 1초를 기다리지 않고 바로 볼 수 있음.
setInterval(getClock, 1000);
//setInterval(function, time) time ms 기준 time마다 function 실행
//setTimeout(function, time) time만큼 stay 후에 function 실행.