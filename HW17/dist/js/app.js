$(() => {
  let submitTasks = $("#submitTasks");
  let forTasks = $("#forTasks");
  let output = $("#output");
  let toDo = [];
  let ul = null;
  submitTasks.on("click", function () {
    let value = forTasks.val().trim();
    if (!value) return;
    toDo.push(value);
    if (!ul) {
      ul = $("<ul></ul>");
      output.append(ul);
    }
    let li = $("<li></li>").text(value);
    let btn = $("<button>Delete</button>");
    btn.addClass("deleteBtn");
    li.addClass("task");
    li.append(btn);
    ul.append(li);
    btn.on("click", function () {
      const index = toDo.indexOf(value);
      if (index > -1) {
        toDo.splice(index, 1);
      }
      li.remove();
    });
    li.on("click", function (e) {
      if ($(e.target).hasClass("deleteBtn")) return;
      $("#modalTaskText").text(value);
      let myModal = new bootstrap.Modal(document.getElementById("taskModal"));
      myModal.show();
    });
    forTasks.val("");
  });
  console.log(toDo);
});