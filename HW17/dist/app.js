"use strict";

$(function () {
  var submitTasks = $("#submitTasks");
  var forTasks = $("#forTasks");
  var output = $("#output");
  var toDo = [];
  var ul = null;
  submitTasks.on("click", function () {
    var value = forTasks.val().trim();
    if (!value) return;
    toDo.push(value);
    if (!ul) {
      ul = $("<ul></ul>");
      output.append(ul);
    }
    var li = $("<li></li>").text(value);
    var btn = $("<button>Delete</button>");
    btn.addClass("deleteBtn");
    li.addClass("task");
    li.append(btn);
    ul.append(li);
    btn.on("click", function () {
      var index = toDo.indexOf(value);
      if (index > -1) {
        toDo.splice(index, 1);
      }
      li.remove();
    });
    li.on("click", function (e) {
      if ($(e.target).hasClass("deleteBtn")) return;
      $("#modalTaskText").text(value);
      var myModal = new bootstrap.Modal(document.getElementById("taskModal"));
      myModal.show();
    });
    forTasks.val("");
  });
  console.log(toDo);
});