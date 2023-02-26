var _ip;
$.getJSON("https://api.ipify.org?format=json", function (data) {
  $("#ip").html(data.ip);
  _ip = data.ip;
  alert("Hello again! This is your ip address:" + data.ip);
});
class Course {
  constructor(title, code, crdt) {
    this.title = title;
    this.code = code;
    this.crdt = crdt;
  }
}
start_btn = document.getElementById("start");
calculate_btn = document.getElementById("calculate");
calculate_btn.addEventListener("click", display_sum);
_div = document.getElementById("container");
_div.style.display = "none";
document.getElementById("sum").style.display = "none";
start_btn.addEventListener("click", function () {
  _div.style.display = "block";
  start_btn.style.display = "none";
});
function sum_even(number) {
  for (i = 0; i < number.length; i++) {
    if (typeof number[i] == "number") {
      if (number[i] % 2 == 0) {
        sum += number[i];
      }
    }
  }
  return sum;
}
function display_sum() {
  document.getElementById("sum").style.display = "block";

  //   _ip = document.getElementById("ip").innerText;
  document.getElementById("sum").innerText = "The sum is " + sum_even(_ip);
}
