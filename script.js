
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
let lowerCaseLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let upperCaseLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let returnVal = [];
let newPassword;

function generatePassword () {
  let length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  if ((length >= 8) && (length <= 128)) {
    alert(`Your password will be ${length} characters.`);
  } else {
    alert(`Your password must be between 8 and 128 characters`);
    return generatePassword();
  };

  let confirms = {
    special: confirm('Would you like your password to contain special characters?'),
    upperCase: confirm('Would you like you password to contain uppercase letters?'),
    lowerCase: confirm('Would you like your password to contain lowercase letters?'),
    numbers: confirm('Would you like your password to contain numbers?'),
  };

  if ((confirms.special) || (confirms.upperCase) || (confirms.lowerCase) || (confirms.numbers)) {
    alert("Please wait while while your password is generated.");
  } else {
    alert('Please choose at least one character type.');
    return generatePassword();
  };

  if (confirms.special) {
    returnVal = returnVal.concat(specialCharacters);
  };

  if (confirms.upperCase) {
    returnVal = returnVal.concat(upperCaseLetters);
  };

  if (confirms.lowerCase) {
    returnVal = returnVal.concat(lowerCaseLetters);
  };

  if (confirms.numbers) {
    returnVal = returnVal.concat(numbers);
  };

  console.log(returnVal);

  for (let i = 0; i < length; i++) {
    random = Math.floor(Math.random() * returnVal.length);
    newPassword = returnVal[random];
    console.log(newPassword);
  }

};

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
