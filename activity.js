var numbers = [];
for (i = 0; i < 3; i++) {
  value = prompt("Enter any number");
  numbers.push(value);
}
document.getElementById("original").innerText = "Original array: " + numbers;

document.getElementById("sorted").innerText =
  "Sorted array: " + sort_array(numbers);
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
