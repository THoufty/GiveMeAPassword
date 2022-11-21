// // Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
// Stating my variables and prompts
var specialcharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "<", ">"]
var pwdLength = prompt("Please enter, numerically, the wanted length of your new password. Please pick a number between 8 and 128.")
var useSpecialCharacters = confirm('Cool! Do you want this password to utilize special characters? Click "OK" for yes and "Cancel" for no')
var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "L", "K", "J", "H", "G", "F", "D", "S", "A", "Z", "X", "C", "V", "B", "N", "M"]
var useUppercase = confirm("Ok! Let's talk letters. Do you want your password to utilize uppercase letters?")
var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "l", "k", "j", "h", "g", "f", "d", "s", "a", "z", "x", "c", "v", "b", "n", "m"]
var useLowercase = confirm("Awesome. How about lowercase letters?")
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var useNumbers = confirm("Alright. And lastly, would you like your new password to utilize numbers as well?")

// Changing the entered value to a number
var enteredLength = (math.floor(pwdLength))

// Random selection from chosen arrays
var random = Math.floor(Math.random() * endSelection.length)
var rand = endSelection[random]

// Return if anything but a numeric value is entered
function generatePassword() {
  if (!pwdLength) {
    return;
  }

  else if (pwdLength === NaN){
    return;
  }

  else if (endSelection.length == enteredLength) {
    return endSelection     
  }
}
for(var i=0; i <= enteredLength; i++) {

}
// Creating an empty variable for the if statements to fill with concats
var endSelection = [];

if (useSpecialCharacters) {
  endSelection.concat(specialCharacters)
}

if (useUppercase) {
  endSelection.concat(uppercase)
}

if (uselowercase) {
  endSelection.concat(lowercase)
}

if (useNumbers) {
  endSelection.concat(numbers)
}















// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}