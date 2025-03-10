import './index.html';
import './style.css';

// 4 карточки => хранение времени / имена совпадают с id
const day = document.getElementById("day")
const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

// получение текущего года (метод объекта Date)
const currentYear = new Date().getFullYear();
// console.log(currentYear);

// Новый год
const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);
// console.log(newYear);

// функция / будет вызываться по таймеру, чтобы видеть новые результаты / вызывается каждую секунду
function countdownTimer() {
  // текущий день
  const todayDate = Date.now()
  // console.log(todayDate);
  // получим разницу между новым годом и текущей датой Unix
  const gap = newYear - todayDate;
  console.log(gap);
  // Расчет кол. дней, часов, минут, секунд (dhms) / Перевод Unix числа в дни, часы, минуты, секунды
const d = Math.floor(gap / 1000 / 60 / 60 / 24);
const h = Math.floor((gap / 1000 / 60 / 60) % 24);
const m = Math.floor((gap / 1000 / 60) % 60);
const s = Math.floor((gap / 1000) % 60);

// console.log(d);
// console.log(h);
// console.log(m);
// console.log(s);

day.innerHTML = d < 10 ? "0" + d : d;
hrs.innerHTML = h < 10 ? "0" + h : h;
min.innerHTML = m < 10 ? "0" + m : m;
sec.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(countdownTimer, 1000);