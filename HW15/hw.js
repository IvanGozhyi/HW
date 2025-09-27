let timer = () => {
    let timeDiv = document.querySelector(".timer");
    let timeSec = document.createElement("span");
    let timeMinutes = document.createElement("span");
    let divider = document.createElement("span");
    divider.textContent = ":";
    let seconds = 50;
    let minutes = 1;
    timeMinutes.textContent = minutes;
    timeSec.textContent = seconds.toString().padStart(2, "0");
     let interval = setInterval(() => {
        seconds--

        if (seconds < 0)
        {
            minutes--
            seconds = 59
        }
        if (minutes < 0)
        {
           clearInterval(interval)
            return;
        }
        timeMinutes.textContent = minutes;
        timeSec.textContent = seconds.toString().padStart(2, "0");
    }, 1000);

    timeDiv.appendChild(timeMinutes);
    timeDiv.appendChild(divider);
    timeDiv.appendChild(timeSec);
}

timer()