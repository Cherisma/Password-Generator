// Assignment Code

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = [1,2,3,4,5,6,7,8,9,0];
var specialCharactersArray = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "^"];


var upperCase = prompt("Would you like to include uppercase characters? Yes or No.")
if(upperCase === "Yes") {myPassword.push(upperCaseArray)}

var lowerCase = prompt("Would you like to include uppercase characters? Yes or No.")
if(lowerCase === "Yes") {myPassword.push(lowerCaseArray)}

var numericCharacters = prompt("Would you like to include numeric characters? Yes or No.")
if(numericCharacters === "Yes") {myPassword.push(numericCharactersArray)}

var specialCharacters = prompt("Would you like to include special characters? Yes or No.")
if(specialCharacters === "Yes") {myPassword.push(specialCharactersArray)}

var index = Math.floor(Math.random() * options.length);


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
