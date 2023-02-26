class Course {
  constructor(title, code, crdt) {
    this.title = title;
    this.code = code;
    this.crdt = crdt;
  }
}
_test = document.getElementById("test");
submit_btn = document.getElementById("submit");
// const save_data = (ev) => {
//   ev.preventDefault();
//   var data = {
//     email: _email,
//     password: _password,
//     year: _year,
//   };
//   alert("done");
//   // _test.textContent = JSON.stringify(data);
// };

submit_btn.addEventListener("click", validate_form);
// const form = document.querySelector("form");
// form.addEventListener("submit", save_data);
function validate_form() {
  var _email = document.forms["myForm"]["email"].value;
  var _password = document.forms["myForm"]["pwd"].value;
  var confirm_password = document.forms["myForm"]["confirm-pwd"].value;
  var _year = document.forms["myForm"]["year"].value;
  var strong_password = new RegExp("^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9])");
  // var current_date = new Date();
  // var current_year = current_date.getFullYear();

  if (_email == "") {
    alert("Email is required!");
    return false;
  } else if (
    !_email.includes("@") ||
    !_email.includes(".") ||
    _email.includes("-")
  ) {
    alert("Enter valid email address");
    return false;
  } else if (
    _email.indexOf("@") < 1 ||
    _email.indexOf("@") == _email.length - 1 ||
    _email.indexOf("@") > _email.lastIndexOf(".")
  ) {
    alert("Enter valid email address");
    return false;
  } else if (_password == "") {
    alert("Password is required!");
    return false;
  } else if (_password.length < 8) {
    alert("Password must contain at least 8 characters!");
    return false;
  } else if (strong_password.test(_password) == false) {
    alert(
      "Password must contain at least 1 special character, 1 uppercase letter and 1 number!"
    );
    return false;
  } else if (confirm_password == "") {
    alert("Confirm Password!");
    return false;
  } else if (confirm_password != _password) {
    alert("Passwords do not match!");
    return false;
  } else if (_year == "") {
    alert("Year of birth is required!");
    return false;
  }
}
// function save_data(event) {
//   event.preventDefault();
//   const data = new FormData(event.target);
//   const value = data.get("email");
//   _test.innerHTML = value;
// }
