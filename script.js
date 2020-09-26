// Assignment Code
var generateBtn = document.querySelector("#generate");

let characters = {
["!", "@", "#", "$", "%", "&", "*", "(", ")", "_", "+"],
lowerCaseLetters: ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
upperCaseLetters: ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
numbers: ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

generatePassword = () => {
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
    special: {
      question: confirm('Would you like your password to contain special characters?'),
      characters: 
    }
    
    upperCase: confirm('Would you like you password to contain uppercase letters?'),
    lowerCase: confirm('Would you like your password to contain lowercase letters?'),
    numbers: confirm('Would you like your password to contain numbers?')
  };

if  ((confirms.special) || confirms.upperCase || confirms.lowerCase || confirms.numbers) {
  alert("Please wait while while your password is generated.");
  }

} else {
  alert('Please choose at least one character type.');
  return generatePassword();
};




};

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
