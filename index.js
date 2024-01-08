let Content = document.querySelector('h1');
let SetMenu = document.querySelectorAll('select');
let btn = document.querySelector("button");
let AllSelectedMenu = document.getElementById('columns');
let Timing;
let Ringtone;
let IsAlarmSet = false;
let Alarttime;


//Adding Options in  Houre

for (i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let Options = `<option value="${i}">${i}</option>`;
    SetMenu[0].firstElementChild.insertAdjacentHTML("afterend", Options);
}
for (i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let Options = `<option value="${i}">${i}</option>`;
    SetMenu[1].firstElementChild.insertAdjacentHTML("afterend", Options);
}
for (i = 2; i > 0; i--) {
    let ampm = i < 2 ? "AM" : "PM";

    let Options = `<option value="${ampm}">${ampm}</option>`;
    SetMenu[2].firstElementChild.insertAdjacentHTML("afterend", Options);
}

Ringtone = new Audio('extreme-clock-alarm-26588.mp3');
setInterval(() => {
    let Times = new Date();
    let h = Times.getHours();
    let m = Times.getMinutes();
    let s = Times.getSeconds();
    let am_pm;
    if (h > 12) {
        h = h - 12;
        am_pm = "AM"

    }
   am_pm = "PM"
    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;
    h = h < 10 ? "0" + h : h;
    Timing = `${h}:${m}:${s}${am_pm}`;

    Content.innerHTML = Timing;



    if (Alarttime == `${h}:${m}:${am_pm}`) {
        console.log("Time has been matched");
        Ringtone.play();
        Ringtone.loop = true;
    }


}, 1000);
function Alarm() {

    if (IsAlarmSet) {
        Alarttime = "  ";
        Ringtone.pause();
        btn.innerText = "Set Time";
        AllSelectedMenu.classList.remove('disabless');
        return IsAlarmSet = false;
    }

    let UserSelected = `${SetMenu[0].value}:${SetMenu[1].value}:${SetMenu[2].value}`;
    if (SetMenu[0].value == "Houre" || SetMenu[1].value == "Minutes" || SetMenu[2].value == "AM/PM") {
        return alert("please set time");
    }

    Alarttime = UserSelected;



    btn.innerText = "Clear Time";
    AllSelectedMenu.classList.add('disabless');
    IsAlarmSet = true;
}
btn.addEventListener('click', Alarm)



