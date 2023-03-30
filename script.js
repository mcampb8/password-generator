// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L","M", "N", "O", "P", "Q", "R", "S","T","U", "V","W","X","Y","Z"]
var lowerCase = [];
for(var i=0;i<upperCase.length; i++){
  lowerCase[i]= upperCase[i].toLowerCase();
}
var nums
var specialChar 
var numChar

// Write password to the #password input
function writePassword() {
  numChar = window.prompt("How many characters would you like your password to be?");
  if (numChar >=8 & numChar <=128){
    generatePassword();
  } else {
    window.alert("You have entered too many or too few characters. Please choose between 8 and 128 characters.")
    writePassword();
  }
  var password = generatePassword() 
  
    upperCase = window.prompt("Would you like uppercase letters?");
    if(upperCase.toLowerCase==="yes")

    window.alert("You must enter a number of characters between 8 and 128");
    writePassword();
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
