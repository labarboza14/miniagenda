const form = document.getElementById("event-form");
const calendarGrid = document.getElementById("calendar-grid");
const todayEventsList = document.getElementById("today-events");

const events = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const time = document.getElementById("time").value;
  const date = document.getElementById("date").value;

  events.push({ name, email, time, date });
  form.reset();
  renderTodayEvents();
});

function renderCalendar() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const currentDay = now.getDate();

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  calendarGrid.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEl = document.createElement("div");
    dayEl.className = "day";
    dayEl.textContent = day;

    if (day === currentDay) {
      dayEl.classList.add("today");
    }

    calendarGrid.appendChild(dayEl);
  }
}

function renderTodayEvents() {
  const today = new Date().toISOString().split("T")[0];
  todayEventsList.innerHTML = "";

  const todaysEvents = events.filter(ev => ev.date === today);

  if (todaysEvents.length === 0) {
    todayEventsList.innerHTML = "<li>Sem eventos para hoje.</li>";
    return;
  }

  for (const ev of todaysEvents) {
    const li = document.createElement("li");
    li.textContent = `${ev.time} - ${ev.name} (${ev.email})`;
    todayEventsList.appendChild(li);
  }
}

function checkEventAlerts() {
  const now = new Date();
  const nowISO = now.toISOString().split("T")[0];
  const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();

  for (const ev of events) {
    if (ev.date !== nowISO) continue;

    const [hour, minute] = ev.time.split(":").map(Number);
    const eventMinutes = hour * 60 + minute;

    if (eventMinutes - currentTimeMinutes === 5) {
      alert(`⏰ Faltam 5 minutos para o evento de ${ev.name}!`);
    }
  }
}

renderCalendar();
renderTodayEvents();
setInterval(checkEventAlerts, 60000); // verifica a cada minuto
