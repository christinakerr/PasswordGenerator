// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generate password based on user input
function generatePassword() {
  var length = prompt("How many characters would you like your password to be?");
  if ((length < 8) || (length > 128)) {
    alert("Please select a number from 8 to 128.") // Validate that user selects a value between 8 and 128
    generatePassword();
  } else {
    var lowercase = confirm("Press OK to include lowercase letters.");
    var uppercase = confirm("Press OK to include uppercase letters.");
    var numeric = confirm("Press OK to include numbers.");
    var specialCharacters = confirm("Press OK to include special characters.");
    
    if ((lowercase === false) && (uppercase === false) && (numeric === false) && (specialCharacters === false)) { // Validate that user selected at lease one character type
      alert("Please select at least one character type.")
      generatePassword();
    } else {

      var characters = ""; //Building string with all the characters the user wanted included

      if (lowercase) {
        characters.concat("abcdefghijklmnopqrstuvwxyz");
      }

      if (uppercase) {
        characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }

      if (numeric) {
        characters.concat("0123456789");
      }

      if (specialCharacters) {
        characters.concat("!@#$%^&*()");
      }


    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
