const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const ul = document.getElementById("list-container")
const completado = document.getElementById("completado")
const pendiente = document.getElementById("pendiente")
const nombresTareas = ["Do the grocery shopping", "Wash the car", "Study for the exam", "Prepare dinner", "Exercise", "Clean the house", "Read a book", "Organize the closet", "Take out the trash", "Pay the bills", "Deal with pending emails", "Plan the vacation", "Send the reports", "Take a walk outdoors", "Learn a new language",];

function tareas(numero) {
    for (let i = 0; i < numero; i++) {
        ul.innerHTML += `<li class="unchecked" id="tarea${i+1}" estado = "false">${nombresTareas[i]}</li>`;
    }
}
tareas(15)

const liElements = document.getElementsByClassName("unchecked")
let completedCount = 0;
completado.innerHTML = completedCount
pendiente.innerHTML = liElements.length - completedCount

for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener("click", () => {
        liElements[i].classList.toggle("checked");
        const estadoActual = liElements[i].getAttribute("estado");
        if (estadoActual === "false") {  
            completedCount++;
            liElements[i].setAttribute("estado", "true");
        } else {
            completedCount--;
            liElements[i].setAttribute("estado", "false");
        }
        completado.innerHTML = completedCount
        pendiente.innerHTML = liElements.length - completedCount
    });
}


const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("en", { day: "numeric" });
  dateText.textContent = date.toLocaleString("en", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("en", { month: "short" });
  dateYear.textContent = date.toLocaleString("en", { year: "numeric" });
};
setDate();
