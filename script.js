// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How many characters would you like your password to be?");
  // validation 

  var lowercase = confirm("Press OK to include lowercase letters.");
  var uppercase = confirm("Press OK to include uppercase letters.");
  var numeric = confirm("Press OK to include numbers.");
  var specialCharacters = confirm("Press OK to include special characters.");
  // validation 
  console.log(length, lowercase, uppercase, numeric, specialCharacters)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
