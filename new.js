// class Course {
//   constructor(title, code, crdt) {
//     this.title = title;
//     this.code = code;
//     this.crdt = crdt;
//   }
// }
// const save_data = (ev) => {
//   ev.preventDefault();
// var data = {
//   email: _email,
//   password: _password,
//   year: _year,
// };
// alert("done");
// _test.textContent = JSON.stringify(data);
// };

// const form = document.querySelector("form");
// form.addEventListener("submit", save_data);
submit_btn = document.getElementById("submit");
submit_btn.addEventListener("click", validate_form);
function validate_form() {
  var _email = document.forms["myForm"]["email"].value;
  var _password = document.forms["myForm"]["pwd"].value;
  var confirm_password = document.forms["myForm"]["confirm-pwd"].value;
  var _year = document.forms["myForm"]["year"].value;
  var strong_password = new RegExp("^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9])");
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
  } else {
    alert("Successfully Registered");
    window.scrollBy(0, 550);
  }
}
// function save_data(event) {
//   event.preventDefault();
//   const data = new FormData(event.target);
//   const value = data.get("email");
//   _test.innerHTML = value;
// }

//Part-2
sort_btn = document.getElementById("sortArray");
palindrome_btn = document.getElementById("palindrome");
prime_btn = document.getElementById("prime");
reverse_btn = document.getElementById("reverse");
suffix_btn = document.getElementById("add-ay");
var text_1 = document.getElementById("text1");
var text_2 = document.getElementById("text2");
var current_date = new Date();
var current_year = current_date.getFullYear();
//Listeners
sort_btn.addEventListener("click", display_sorted);
palindrome_btn.addEventListener("click", display_palindrome);
prime_btn.addEventListener("click", display_prime);
reverse_btn.addEventListener("click", display_reversed);
// suffix_btn.addEventListener("click");
//Functions
function sort_array(num) {
  for (i = 0; i < num.length; i++) {
    for (j = 0; j < num.length - i - 1; j++) {
      if (num[j + 1] < num[j]) {
        var k = num[j];
        num[j] = num[j + 1];
        num[j + 1] = k;
      }
    }
  }
  return num;
}
function display_sorted() {
  var numbers = [];
  for (i = 0; i < 10; i++) {
    value = prompt("Enter any number");
    numbers.push(value);
  }
  text_1.innerText = "Original array: " + numbers;
  text_2.innerText = "Sorted array: " + sort_array(numbers);
}
function is_palindrome(str) {
  var reversed_str = "";
  for (i = 0; i < str.length; i++) {
    reversed_str = str[i] + reversed_str;
  }
  if (str.toLowerCase() == reversed_str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
function display_palindrome() {
  value = prompt("Give a string");
  if (is_palindrome(value)) {
    text_1.innerText = value + " is a palindrome";
    text_2.innerText = "";
  } else {
    text_1.innerText = value + " is not a palindrome";
    text_2.innerText = "";
  }
}
function is_prime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function display_prime() {
  do {
    year_of_birth = prompt("Which year were you born?");
    age = current_year - year_of_birth;
  } while (current_year < year_of_birth);
  if (is_prime(age)) {
    text_1.innerText = "Your age '" + age + "' is a prime number";
    text_2.innerText = "";
  } else {
    text_1.innerText = "Your age '" + age + "' is not a prime number";
    text_2.innerText = "";
  }
}
function reverse_num(value) {
  var _array = [];
  for (i = 0; i < value.length; i++) {
    if (typeof value[i] == "number") {
      _array.push(value[i]);
    }
  }
  for (j = 0; j < value.length; j++) {
    if (typeof value[j] == "number") {
      value[j] = _array.pop();
    }
  }
  return value;
}
function display_reversed() {
  var input = prompt("Enter any string that does or does not contain numbers");
  text_1.innerText = "Your input is " + input;
  text_2.innerText = "The result is " + reverse_num(input);
}
