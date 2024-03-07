// declaring global vaariables 
var generateBtn = document.querySelector("#generate");

var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = lowercaseList.toLocaleUpperCase();
var specialList = "!@#$%^&*()_";
var numberList = "1234567890";

// adds a click event listener
generateBtn.addEventListener("click", writePassword);

// Writes password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // prompts user to add a numeric value
  let length = prompt("How many characters? 8 to 128 charcters allowed.");
  console.log(length);
  // the while loop validates the user input
  while (length < 8 || legth > 128) {
    length = prompt("Please enter 8 to 128 character.");
  }
  let lowercaseList = confirm("Would you like lower case letters?")
  if (lowercaseList) {
    // var val = 
  }

}

// Add event listener to generate button

