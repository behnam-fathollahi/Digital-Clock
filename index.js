const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl,(innerText = ampm);
    setTimeout(() =>{
     clock()
    }, 1000)
}
clock()