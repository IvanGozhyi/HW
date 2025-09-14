const str = "Today was an incredibly productive day! I managed to finish my project, " +
    "get a solid workout in, and even take some time to relax. " +
    "Remember — balance between work and personal life is the key to long-term success.\n" +
    "#motivation #productivity #balance #success #dailyhabits"
const regExp = /#/g;
console.log(str.match(regExp));

const str2 = "We started working on the project on 01.08.2025, presented the first results on 15.08.2025, and the final stage is scheduled for 30.09.2025.\n" +
    "Don’t forget, the report deadline is 05.10.2025, so make sure to finish all revisions before 28.09.2025."
const regExp2 = /[0-9]{2}.[0-9]{2}.[0-9]{4}/g;
console.log(str2.match(regExp2));

const str3 = "If you want to quickly find the information you need, use search: https://google.example\n" +
    "\n" +
    "I also recommend checking out these helpful resources:\n" +
    "\n" +
    "https://news.example\n" +
    " — for the latest news\n" +
    "\n" +
    "https://docs.example\n" +
    " — for documentation\n" +
    "\n" +
    "https://forum.example\n" +
    " — to ask questions in the community"
const regExp3 = /https:\/\/[a-z]{4,}\.example/g;
console.log(str3.match(regExp3));

const name = document.querySelector(".name");
const example = /([a-z]|[A-Z])([a-z]|[A-Z]|[0-9]|_){2,14}/;
const subBtn = document.querySelector(".submit");

subBtn.addEventListener("click", () => {
    const nameStr = name.value;
    if (nameStr.match(example)) {
        console.log("your name is totally correct");
    } else {
        console.log("Your name is incorrect");
    }
})
