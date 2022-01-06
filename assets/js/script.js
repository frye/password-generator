// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to prompt user to choose character classes.
function askForCharacterClass(question) {
  return confirm('Do you want to include ' + question + '?')
}

// Generating the password based on user selections
function generatePassword() {

// Declare the strings that contain the different character classes.

  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = upperCase.toLowerCase(); //might just remove this later and do the conversion as needed later.
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()_+{}:"<>?|';

  // declare other variables or constants.
  const MIN_PWLENGTH = 8;
  const MAX_PWLENGTH = 124; //might remove this later. I guess we could just go on ang generate even longer passwords.
  var characterString = ''; // We will add the character classes here based on user feedback and then use it to generate the PW.

  var passwordLength = MIN_PWLENGTH; //initial length, can be overridden by user.
  passwordLength = prompt('Enter desired password length: ', MIN_PWLENGTH);
  if (passwordLength < MIN_PWLENGTH || passwordLength > MAX_PWLENGTH) {
    alert('Entered password lengt is not between 8 and 124 characters. Using default: ' + MIN_PWLENGTH);
  }

  // Ask the user what character classes they want in the password.
  if ( askForCharacterClass('uppercase letters') ) {
    characterString += upperCase;
  }
  if ( askForCharacterClass('lowercase letters') ) {
    characterString += lowerCase;
  }
  if ( askForCharacterClass('numbers') ) {
    characterString += numbers;
  }
  if ( askForCharacterClass('symbols') ) {
    characterString += symbols;
  }

  if (characterString.length === 0 ) {
    alert('No character classes selected. Using all uppercase letters.');
    characterString += upperCase;
  }

  console.log(characterString);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
