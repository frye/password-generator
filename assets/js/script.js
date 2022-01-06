// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#pwtext");
passwordText.innerHTML = "Your generated password";

// Function to prompt user to choose character classes.
function askForCharacterClass(question) {
  return confirm('Do you want to include ' + question + '?')
}

const DEBUG = false; // Set to true to enable extra logging.

function debug(string) {
  if (DEBUG) {
    console.log(string);
  }
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
  var passwordString = '';
  var passwordLength = MIN_PWLENGTH; //initial length, can be overridden by user.

  // Prompts to get user input on password length and what character classes to include.
  passwordLength = prompt('Enter desired password length: ', MIN_PWLENGTH);
  if (passwordLength < MIN_PWLENGTH || passwordLength > MAX_PWLENGTH) {
    alert('Entered password lengt is not between ' + MIN_PWLENGTH + ' and ' +MAX_PWLENGTH + ' characters. Using default: ' + MIN_PWLENGTH);
    debug('User selected invalid password length, using default.');
    passwordLength = MIN_PWLENGTH;
  }

  debug('Selected password length: ' + passwordLength);

  // Ask the user what character classes they want in the password.
  if (askForCharacterClass('uppercase letters')) {
    characterString += upperCase;
    debug('Adding upperCase');
  }
  if (askForCharacterClass('lowercase letters')) {
    characterString += lowerCase;
    debug('Adding lowercase');
  }
  if (askForCharacterClass('numbers')) {
    characterString += numbers;
    debug('Adding numbers');
  }
  if (askForCharacterClass('symbols')) {
    characterString += symbols;
    debug('Adding symbols');
  }

  if (characterString.length === 0) {
    alert('No character classes selected. Using all uppercase letters.');
    debug('User selected no character classes, using defaults.');
    characterString += upperCase;
  }

  debug('Characters that will be used: ' + characterString);


  // Generate the actual password.

  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characterString.length);
    passwordString += characterString.substring(index, index + 1);
  }

  debug('Generated password: ' + passwordString);
  // Return the generated password to be added into the webpage.
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();

  debug('Password length: ' + password.length);

  password = password.replace(/</g, '&lt;');
  password = password.replace(/>/g, '&gt;');
  password = password.replace(/"/g, '&quot;');

  debug('Escaped string: ' + password);
  
  passwordText.innerHTML = password;

  // Make the password selected by default when active.
  // Using a variable that is set to none in the stylesheet.
  document.body.style.setProperty('--user-select', 'all');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);