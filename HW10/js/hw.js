let toDo = [];
let url = "";

let forPrompt = () => {
    let promptButton = document.getElementById("promptButton");
    promptButton.addEventListener("click", function () {

       url = prompt("Enter the url") ;
       console.log(url);//just a little check

    })
}


let forSubmit = () => {
    let subButton = document.getElementById("subButton");
    subButton.addEventListener("click", function () {
        if(!url){
            alert("Please enter a valid URL");
            return;
        }
        window.location.href = url;
    })
}




let task1 = () => {
    forPrompt();
    forSubmit();
}

task1();



let parentListener = () => {
    let parent = document.getElementById("parent");
    parent.addEventListener("click", function (event) {
        if (event.target.classList && event.target.classList.contains("childButton")) {
            alert(`Button number ${event.target.dataset.id} was clicked`);
        }
    })
}

parentListener();

let toDoList = () => {
    let submitTasks = document.getElementById("submitTasks");
    let forTasks = document.getElementById("forTasks");
    let output = document.getElementById("output");

    let ul = null;

    submitTasks.addEventListener("click", function () {

        let value = forTasks.value.trim();
        if (!value) return;

        toDo.push(value);

        if(!ul){
            ul = document.createElement("ul");
            output.appendChild(ul);
        }

        let li = document.createElement("li");
        li.textContent = value;
        ul.appendChild(li);

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        li.appendChild(btn);

        btn.addEventListener("click", function () {
            const index = toDo.indexOf(value);
            if (index > -1) {
                toDo.splice(index , 1);
            }

            li.parentNode.removeChild(li);

        })

        forTasks.value = "";
    })
}

console.log(toDo);

toDoList();