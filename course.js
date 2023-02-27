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
  get_title() {
    return this.title;
  }
  get_code() {
    return this.code;
  }
  get_crdt() {
    return this.crdt;
  }
}
submit_course = document.getElementById("submit-course");
submit_course.addEventListener("click", add_course);
function add_course() {
  // c_title = document.getElementBy("title").value;
  // c_code = document.getElementBy("code").value;
  // c_crdt = document.getElementBy("crdt").value;
  // const cour = new Course(c_title, c_code, c_crdt);
  alert("successful");
  // document.getElementById("course-details").innerText = c_title;
  window.scrollBy(0, 300);
}
to_the_top = document.getElementById("to-the-top");
to_the_top.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("course-details").innerText =
      "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  document.getElementById("course-details").innerText =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
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
