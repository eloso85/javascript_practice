console.log("hello world");

// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function CurrentDay() {
  let date = new Date();

  return (
    console.log(`${date.toLocaleString("en-US", { weekday: "long" })}`),
    console.log(`${date.toLocaleString("en-US", { timeStyle: "medium" })}`)
  );
}

CurrentDay();

function PrintWindow() {
  onload(window.print());
}

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function day_format() {
  let d = new Date();
  d = d.toLocaleString();

  return console.log(d.replaceAll("/", "-")), console.log(d);
}

day_format();

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

function triangleArea(a, b, c) {
  var p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log(triangleArea(5, 6, 7));

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapyear(2016));

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

function yearOne() {
  for (let year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0, 1);
    if (d.getDay() === 0) console.log(`1st January is being a Sunday  ${year}`);
  }
}
yearOne();

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

function randomInt(input) {
  const num = Math.ceil(Math.random() * 25);
  console.log(num);

  return input === num
    ? console.log("its a match")
    : console.log("not a match");
}

randomInt(15);

// 9. Write a JavaScript program to calculate days left until next Christmas.

today = new Date();

let cmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
let one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / one_day));

//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

function multiplication(a, b) {
  let answer = a * b;
  let answer2 = a / b;
  console.log(answer);
  console.log(answer2);
}
multiplication(2, 2);

//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function celsiusToFahrenheit(celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32;
  console.log(`11. ${fahrenheit}`);
}

celsiusToFahrenheit(25);

//15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function difference(sum) {
  let answer = sum - 13;

  if (sum > 13) {
    return console.log(answer * 2);
  } else {
    return console.log(answer);
  }
}

difference(32);

//16 Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
console.log("<---- Answer 16 ---->");
function addToTriple(num1, num2) {
  let sum = num1 + num2;

  return num1 === num2 ? console.log(sum * 3) : console.log(sum);
}

addToTriple(5, 5);

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
console.log("<---- Answer 17 ---->");
function question17(num1) {
  let sum = 19 - num1;
  return num1 > 19 ? console.log(sum * 3) : console.log(sum);
}

question17(20);

//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
console.log("<---- Answer 18 ---->");

function fiftyCheck(num1, num2) {
  let numValue = num1 + num2;

  if (numValue === 50 || num1 === 50 || num2 === 50) {
    return console.log("true");
  }
  console.log(numValue);
}

fiftyCheck(25, 25);

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
console.log("<---- Answer 19 ---->");
function hundred(num) {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}

console.log(hundred(90));

//20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
console.log("<---- Answer 20 ---->");

function isPosOrNeg(num) {
  let answer = Math.sign(num);

  return answer === 1 ? console.log("Positive") : console.log("Negative");
}

isPosOrNeg(-3);

//21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
console.log("<---- Answer 21 ---->");
function addToString(string) {
  let text = string;
  let addPy = "py";
  let result = addPy.concat(text);
  //console.log(result);

  if (text.substring(0, 2) === "py") {
    return console.log("start with py");
  } else {
    return console.log(result);
  }
}

addToString("python");

//22 Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
console.log("<---- Answer 22 ---->");

function stringSlice(string) {
  let result = string.slice(0, 5);
  console.log(result);
}

stringSlice("asdfrf");

//23 Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
function newString(input) {
  let newInput;
  let firstLetter = input.slice(0, 1);
  let middleString = input.substring(1, input.length - 1);
  let lastLetter = input.slice(-1);
  if (input.length > 1) {
    newInput = lastLetter + middleString + firstLetter;
    return console.log(newInput);
  } else {
    return console.log("Not Greater then 1");
  }
}

newString("swift");

//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
console.log("<---- Answer 25 ---->");

function multiple(input) {
  if (input % 3 == 0 || input % 7 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

multiple(10);

//26 Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
console.log("<---- Answer 26 ---->");
function func26(string) {
  const newString = string.slice(-3);
  if (string.length >= 3) {
    console.log(newString + string + newString);
  } else {
    console.log("false");
  }
}

func26("abcd");

//27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise
console.log("<---- Answer 27 ---->");

function func27(string) {
  const newString = string.substring(0, 4);
  if (newString.includes("java")) {
    console.log(true);
  } else {
    console.log("false");
  }
}
func27("javas me");

//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
console.log("<---- Answer 28 ---->");

function func28(int1, int2) {
  let test = [];
  for (let i = 50; i <= 99; i++) {
    test.push(i);
  }

  test.includes(int1) && test.includes(int2)
    ? console.log("true")
    : console.log("false");

  // console.log(test);
}

func28(1, 99);

//30 Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
console.log("<---- Answer 30 ---->");
function func29(str) {
  const test = str;
  let result = test.indexOf("script");
  result == 4 ? console.log(test.replace("script", "")) : console.log(test);
}

func29("Javascript");
func29("coffescript");

//31. Write a JavaScript program to find the largest of three given integers.

function func31(int1, int2, int3) {
  let a = int1;
  let b = int2;
  let c = int3;

  console.log(Math.max(a, b, c));
}

func31(1, 50, 3);

//32 Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
console.log("<---- Answer 32 ---->");
function func32(int1, int2) {
  let a = Math.abs(100 - int1);
  let b = Math.abs(100 - int2);

  if (a < b) {
    console.log(`b ${b}`);
  } else if (a > b) {
    console.log(`a ${a}`);
  }

  console.log(Math.min(a, b));
}

func32(90, 89);

//33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
console.log("<---- Answer 33 ---->");

function func33(int1, int2){
    const array1 = Array.from({ length: 61 - 40  }, (_, i) => 40 +i)
    const array2 = Array.from({ length: 101 - 70 }, (_, i) => 70 +i)

    array1.includes(int1) && array1.includes(int2) || array2.includes(int1) && array2.includes(int2)? console.log("in range") : console.log("not in range");

    }

func33(44, 56);
func33(70, 95);
func33(50, 89);
