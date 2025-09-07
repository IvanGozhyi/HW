


let cities = {
    KV : "Kyiv",
    CHG: "Chicago",
    BRL: "Berlin",
    TKY: "Tokyo",
};





let submit = () => {
    const form = document.forms[0];
    const submitBtn = document.querySelector(".submit");
    const fname = document.querySelector(".firstName");
    const lname = document.querySelector(".lastName");
    const date = document.querySelector(".date");
    const gender = document.querySelector(".gender");
    const address = document.querySelector(".address");
    const city = form.city.value;

   let showSkills = () =>{
       const skills = [];

       for(let i = 0; i < form.forLanguage.length; i++){
           if(form.forLanguage[i].checked){
               skills.push(form.forLanguage[i].value);
           }
       }
       return skills;
   }




    submitBtn.addEventListener("click", () => {
        let subArr = [];
        let wrap = document.querySelector('.wrapper');
        subArr.push({
           FirstName: fname.value,
           LastName: lname.value,
           BirthDay: date.value,
           Gender: gender.value,
           Cities: cities[city],
           Address: address.value,
           ProgrammingLanguages: showSkills(),
    });
        console.log(subArr);

       document.write(` 
       <p>First Name: ${fname.value}</p>
       <p>Last Name: ${lname.value}</p>
       <p>Birth Day: ${date.value}</p>
       <p>Gender: ${gender.value}</p>
       <p>Cities: ${cities[city]}</p>
       <p>Address: ${address.value}</p>
       <p>Programming Languages: ${showSkills()}</p>`)


    });
}

submit();