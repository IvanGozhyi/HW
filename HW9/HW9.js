

let pythagorasTable =  () => {

    let size = 10;
    let table = [];

    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push((i+1)*(j+1));
        }
        table.push(row);

    }
    let html = "<table>";
    for (let i = 0; i < table.length; i++) {
        html += "<tr>";
        for (let j = 0; j < table[i].length; j++) {
            html += `<td>${table[i][j]}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";

    document.getElementById("output").innerHTML = html;
}



let changeColor = () => {
    let text = document.getElementById("text");
    let btn = document.getElementById("divButton");
    let change = false;

    btn.addEventListener("click", () => {
        if (!change) {
            text.classList.remove("text");
            text.classList.add("additive");
        } else {
            text.classList.remove("additive");
            text.classList.add("text");
        }
        change = !change;
    });
}


let showRandomImg = () => {
    let container = document.getElementById("container");

    function showRandomImage() {
        let randomNumber = Math.floor(Math.random() * 9) + 1;
        let img = document.createElement("img");
        img.src = `images/${randomNumber}.jpg`;
        img.alt = `Random image ${randomNumber}`;

        container.innerHTML = "";
        container.appendChild(img);
    }

    let btn = document.getElementById("imgBtn");
    btn.addEventListener("click", showRandomImage);
}

let choice = parseInt(prompt("What is your choice?"));

switch (choice) {
    case 1:
        pythagorasTable();
        break;
    case 2:
        changeColor();
        break;
    case 3:
       showRandomImg();
       break;
}

console.log(navigator)





