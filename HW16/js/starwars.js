let container = document.querySelector('.container');
let people = document.querySelector('.people');
let planets = document.querySelector('.planets');
let vehicles = document.querySelector('.vehicles');
let loadMoreBtn = document.querySelector('.loadMore');
let theme = document.querySelector('.themes');


let choice = ""
let url = "https://swapi.dev/api/"
let nextUrl = "";




let showInfo = (themes, clear = true) => {
    let ApiUrl = themes.startsWith("http") ? themes :  `${url}${themes}`;
    fetch(ApiUrl)
    .then(response => response.json())
    .then(data => {
        if (clear)container.innerHTML = '';


        data.results.forEach(item => {
            let divItem = document.createElement("div");
            divItem.textContent = item.name || item.title;
            divItem.classList.add('divItem');
            divItem.addEventListener('click', function(){

                let existing = divItem.querySelector('.description');
                if (existing) {
                    existing.remove();
                    return;
                }


                let description = document.createElement("div");
                description.classList.add('description');

                if (choice === "people"){
                    description.innerHTML =`
                    Height:${item.height}<br>
                    Mass:${item.mass}<br>
                    Hair_color:${item.hair_color}<br>
                    `;
                }else if (choice === "planets"){
                    description.innerHTML =`
                    Rotation period:${item.rotation_period}<br>
                    Orbital period:${item.orbital_period}<br>
                    Diameter:${item.diameter}<br>
                    `;
                }else if (choice === "vehicles"){
                    description.innerHTML = `
                    Model:${item.model}<br>
                    Manufacturer:${item.manufacturer}<br>
                    Cost in credits:${item.cost_in_credits}<br>
                    `;
                }else description.innerHTML = "";


               divItem.appendChild(description);


            });
            container.appendChild(divItem);
        });



        nextUrl = data.next;

        if (nextUrl) {
            loadMoreBtn.classList.remove('hidden');
        } else {
            loadMoreBtn.classList.add('hidden');
        }






    })
        .catch(error => {
            console.log(`Error,${error}`);
        });


}

theme.addEventListener("click", function(){
    let body = document.querySelector('body');

    body.classList.toggle('dark_theme');
    if (body.classList.contains('dark_theme')) {
        theme.innerText = "Light theme";
    } else {
        theme.innerText = "Dark theme";
    }

});

loadMoreBtn.addEventListener('click', function() {
   showInfo(nextUrl,false);
});

people.addEventListener('click', function(){
    choice = "people";
    showInfo(choice);
});

planets.addEventListener('click', function(){
    choice = "planets";
    showInfo(choice);
})

vehicles.addEventListener('click', function(){
    choice = "vehicles";
    showInfo(choice);
})