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

  var lowerCharacters = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var numerals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var specialChars = ["!", '@', '#', '$', "%", '^', '&', '*', "(", ')']

  var length = prompt("How many characters would you like your password to be?");
  if ((length < 8) || (length > 128)) {
    alert("Please select a number from 8 to 128.") // Validate that user selects a value between 8 and 128
    return generatePassword();
  }
    var lowercase = confirm("Press OK to include lowercase letters.");
    var uppercase = confirm("Press OK to include uppercase letters.");
    var numeric = confirm("Press OK to include numbers.");
    var specialCharacters = confirm("Press OK to include special characters.");

    console.log(length);
    
    if ((lowercase === false) && (uppercase === false) && (numeric === false) && (specialCharacters === false)) { // Validate that user selected at lease one character type
      alert("Please select at least one character type.")
      return generatePassword();
    }

      var characters = []; //Building array with all the characters the user wanted included
      var tempPassword = [];

      if (lowercase) {
        for (var i=0; i<lowerCharacters.length; i++) {
          characters.push(lowerCharacters[i]);
        }
        console.log(characters);
      }

      if (uppercase) {

        for (var i=0; i<upperCharacters.length; i++) {
          characters.push(upperCharacters[i]);
        }
        console.log(characters);
      }

      if (numeric) {
        for (var i=0; i<numerals.length; i++) {
          characters.push(numerals[i]);
        }
        console.log(characters);
      }

      if (specialCharacters) {
        for (var i=0; i<specialChars.length; i++) {
          characters.push(specialChars[i]);
        }
        console.log(characters);
      }

      for (i=0; i<length; i++) {
        var char = characters[Math.floor(Math.random()*characters.length)];
        tempPassword.push(char);
      }

      console.log(tempPassword);

      password = tempPassword.join("");
      console.log(password);
      return password;
    
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
