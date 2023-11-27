let kullaniciGirisi = prompt("Lütfen adınızı girin:");

document.querySelector("#myName").innerHTML=kullaniciGirisi;

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
function showTime(){
let d = new Date();
      
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
const weekdays=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
let day=weekdays[d.getDay()]
let time = h + ":" + m + ":" + s + " " + day;
document.querySelector("#myClock").innerHTML=time
console.log(time)
}
setInterval(showTime, 1000);
