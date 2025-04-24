let dataSell = new Date(2025, 4, 20, 0, 0); 
const timerElement = document.getElementById("timer");
const inHeaderElement = document.getElementById("header");
inHeaderElement.innerHTML = "До кінця розпродажу залишилось:";

function timer() {
    let now = new Date();
    let ms = dataSell - now;

    if (ms <= 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "Час минув!";
        return;
    }

    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((ms % (1000 * 60)) / 1000);

    timerElement.innerHTML = `<h4>Залишилось:</h4><br> <table>
    <tr><th><span>Днів:</th>  <td> ${days}</span></td></tr> 
    <tr><th><span>Годин:</th> <td> ${hours}</span,</td></tr>
    <tr><th><span>Хвилин:</th> <td>${minutes}</span></td></tr> 
    <tr><th><span>Секунд:</th> <td>${seconds}</span></td></tr>
    </table>`;
}

const timerInterval = setInterval(timer, 1000);
