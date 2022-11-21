// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Stating my variables and prompts
function generatePassword() {
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "<", ">"]
  var pwdLength = prompt("Please enter, numerically, the wanted length of your new password. Please pick a number between 8 and 128.")
  
    // Return if anything but a numeric value is entered
    if (!pwdLength) {
      return generatePassword()
    }
  
    else if (pwdLength < 8) {
      return generatePassword()
    }
      
    else if (pwdLength > 128) {
      return generatePassword()
    }

  var useSpecialCharacters = confirm('Cool! Do you want this password to utilize special characters? Click "OK" for yes and "Cancel" for no')
  var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "L", "K", "J", "H", "G", "F", "D", "S", "A", "Z", "X", "C", "V", "B", "N", "M"]
  var useUppercase = confirm("Ok! Let's talk letters. Do you want your password to utilize uppercase letters?")
  var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "l", "k", "j", "h", "g", "f", "d", "s", "a", "z", "x", "c", "v", "b", "n", "m"]
  var useLowercase = confirm("Awesome. How about lowercase letters?")
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var useNumbers = confirm("Alright. And lastly, would you like your new password to utilize numbers as well?")

  // Changing the entered value to a number
  var enteredLength = parseInt(pwdLength)

  // Creating an empty variable for the if statements to fill with concats
  var endSelection = [];

  if (useSpecialCharacters) {
    endSelection = endSelection.concat(specialCharacters)
  }

  if (useUppercase) {
    endSelection = endSelection.concat(uppercase)
  }

  if (useLowercase) {
    endSelection = endSelection.concat(lowercase)
  }

  if (useNumbers) {
    endSelection = endSelection.concat(numbers)
  }

  var finalPassword = ""

  for (var i = 0; i < enteredLength; i++) {
    finalPassword += endSelection[Math.floor(Math.random()* endSelection.length)]
  }
  return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);