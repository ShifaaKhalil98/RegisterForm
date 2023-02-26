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
reverse_btn.addEventListener("click");
suffix_btn.addEventListener("click");
//Functions
function sort_array(num) {
  for (i = 0; i < num.length; i++) {
    for (j = 0; j < num.length - i - 1; j++) {
      if (num[j + 1] < num[j]) {
        k = num[j];
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
  reversed_str = "";
  for (i = 0; i < str.length; i++) {
    reversed_str = str[i] + reversed_str;
  }
  if (str == reversed_str) {
    return true;
  } else {
    return false;
  }
}
function display_palindrome() {
  value = prompt("Give a string");
  if (value.is_palindrome) {
    text_1.innerText = text_1 + "is a palindrome";
    text_2.innerText = "";
  } else {
    text_1.innerText = text_1 + "is not a palindrome";
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
  if (age.is_prime) {
    text_1.innerText = "Your age " + text_1 + "is a prime number";
    text_2.innerText = "";
  } else {
    text_1.innerText = "Your age " + text_1 + "is not a prime number";
    text_2.innerText = "";
  }
}
function reverse_num(value) {
  var _array = [];
  for (i = 0; i < value.length; i++) {
    if (typeof value[i] == Number) {
      _array.push(value[i]);
    }
  }
  sort_array(_array);
  for (j = 0; j < value.length; j++) {
    if (typeof value[j] == Number) {
      value[j] = _array[0];
      _array.shift();
    }
  }
  return value;
}
function display_reversed() {
  var input = prompt("Enter any string that does or does not contain numbers");
  text_1.innerText = "Your input is " + input;
  text_2.innerText = "The result is " + reverse_num(reverse_num);
}
