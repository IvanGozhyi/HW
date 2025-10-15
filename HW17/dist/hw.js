"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var modalBtn = document.querySelector('.forModal');
var AlertBtn = document.getElementById("forAlert");
var alert = document.querySelector('.alert');
modalBtn.addEventListener('click', function () {
  var myModal = new bootstrap.Modal(document.getElementById("taskModal"));
  myModal.show();
});
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (el) {
    return new bootstrap.Tooltip(el);
  });
});
AlertBtn.addEventListener("click", function () {
  alert.classList.toggle("d-none");
});
document.addEventListener("DOMContentLoaded", function () {
  var output = document.getElementById("output");
  var checkBtn = document.getElementById("checkDate");
  var input = document.getElementById("userDate");
  var myBirthday = moment("2007-03-09");
  var formattedMyBD = myBirthday.format("dddd, D MMMM YYYY");
  output.innerHTML = "<div class=\"alert alert-info\">My birthday <b>".concat(formattedMyBD, "</b></div>");
  checkBtn.addEventListener("click", function () {
    var value = input.value.trim();
    var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    output.innerHTML = "";
    if (!regex.test(value)) {
      output.innerHTML = "<div class=\"alert alert-danger\">Invalid format</div>";
      return;
    }
    var userMoment = moment(value, "DD/MM/YYYY", true);
    if (!userMoment.isValid()) {
      output.innerHTML = "<div class=\"alert alert-warning\">This date is not exist</div>";
      return;
    }
    var converted = userMoment.format("YYYY-MM-DD");
    output.innerHTML = "<div class=\"alert alert-success\">Your birthday in pther format <b>".concat(converted, "</b></div>");
  });
});