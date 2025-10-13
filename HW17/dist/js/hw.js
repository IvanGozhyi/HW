let modalBtn = document.querySelector('.forModal');
let AlertBtn = document.getElementById("forAlert");
let alert = document.querySelector('.alert');
modalBtn.addEventListener('click', function () {
  let myModal = new bootstrap.Modal(document.getElementById("taskModal"));
  myModal.show();
});
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
});
AlertBtn.addEventListener("click", function () {
  alert.classList.toggle("d-none");
});
document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  const checkBtn = document.getElementById("checkDate");
  const input = document.getElementById("userDate");
  const myBirthday = moment("2007-03-09");
  const formattedMyBD = myBirthday.format("dddd, D MMMM YYYY");
  output.innerHTML = `<div class="alert alert-info">My birthday <b>${formattedMyBD}</b></div>`;
  checkBtn.addEventListener("click", function () {
    const value = input.value.trim();
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    output.innerHTML = "";
    if (!regex.test(value)) {
      output.innerHTML = `<div class="alert alert-danger">Invalid format</div>`;
      return;
    }
    const userMoment = moment(value, "DD/MM/YYYY", true);
    if (!userMoment.isValid()) {
      output.innerHTML = `<div class="alert alert-warning">This date is not exist</div>`;
      return;
    }
    const converted = userMoment.format("YYYY-MM-DD");
    output.innerHTML = `<div class="alert alert-success">Your birthday in pther format <b>${converted}</b></div>`;
  });
});