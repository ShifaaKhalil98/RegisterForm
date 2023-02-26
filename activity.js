sort_btn = document.getElementById("sortArray");
palindrome_btn = document.getElementById("palindrome");
prime_btn = document.getElementById("prime");
reverse_btn = document.getElementById("reverse");
suffix_btn = document.getElementById("add-ay");
var text_1 = document.getElementById("text1");
var text_2 = document.getElementById("text2");
//Listeners
sort_btn.addEventListener("click", display_sorted);
palindrome_btn.addEventListener("click", display_palindrome);
prime_btn.addEventListener("click");
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
function palindrome(str) {
  reversed_str = "";
  for (i = 0; i < str.length; i++) {
    reversed_str = str[i] + reversed_str;
  }
  return reversed_str;
}
function display_palindrome() {
  value = prompt("Give a string");
  if (value == reversed_str(value)) {
    text_1.innerText = text_1 + "is a palindrome";
    text_2.innerText = "";
  }
}
