// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L","M", "N", "O", "P", "Q", "R", "S","T","U", "V","W","X","Y","Z"]
var lowerCase = [];
for(var i=0;i<upperCase.length; i++){
  lowerCase[i]= upperCase[i].toLowerCase();
}
var nums = [0,1,2,3,4,5,6,7,8,9]
var specialChar = ["!","@","#","$","%","^","&","*","(",")"]
//upper and lower case
var upLowCase= upperCase.concat(lowerCase);
//uppercase and numbers
var upNums= upperCase.concat(nums);
//uppercase and special characters
var upSpec= upperCase.concat(specialChar);
//lowercase and numbers
var lowNums=lowerCase.concat(nums);
//lowercase and special characters
var lowSpec=lowerCase.concat(specialChar);
// numbers and special characters
var numSpec = nums.concat(specialChar);
// all but special char
var allButSpec = upLowCase.concat(nums);
// all but numbers
var allButNum = upLowCase.concat(specialChar);
// all but lowercase
var allButLow = upSpec.concat(nums);
// all but uppercase
var allButUp = lowSpec.concat(nums);
// all character types
var allChars = allButUp.concat(upperCase);

var numChar
var upInclude
var lowInclude
var specInclude
var numInclude
var password
var pass
var passArray = []

// Write password to the #password input
function writePassword() {
 generatePassword();
}
  function generatePassword() { 
    numChar = window.prompt("How many characters would you like your password to be?");
    if (numChar <8 || numChar>128){
      window.alert("You have entered too many or too few characters. Please choose between 8 and 128 characters.")
      writePassword();
    } else {
    upInclude = window.confirm("Would you like to use uppercase letters?");
    lowInclude = window.confirm("Would you like to use lowercase letters?");
    specInclude = window.confirm("Would you like to use special characters?");
    numInclude = window.confirm("Would you like to use numbers?");
    } if(!upInclude && !lowInclude && !specInclude && !numInclude){
      window.alert("You have to choose at least one type of character")
      writePassword();
      //all chars
    } else if(upInclude && lowInclude && specInclude && numInclude){
      pass= allChars;
      //all but numbers
    }else if(upInclude && lowInclude && specInclude && !numInclude){
      pass= allButNum;
      //all but special chars
    } else if(upInclude && lowInclude && !specInclude && numInclude){
      pass = allButSpec;
      // all but lowercase
    } else if(upInclude && !lowInclude && specInclude && numInclude){
      pass = allButLow;
      // all but uppercase
    } else if(!upInclude && lowInclude && specInclude && numInclude){
      pass = allbutUp;
      // upper and lower case
    } else if(upInclude && lowInclude && !specInclude && !numInclude){
      pass = upLowCase;
      // uppercase and numbers
    } else if(upInclude && !lowInclude && !specInclude && numInclude){
      pass = upNums;
      // uppercase and special chars
    }else if(upInclude && !lowInclude && specInclude && !numInclude){
      pass = upSpec;
      //lowercase and special chars
    }else if(!upInclude && lowInclude && specInclude && !numInclude){
      pass = lowSpec;
      // lowercase and numbers
    }else if(!upInclude && lowInclude && !specInclude && numInclude){
      pass = lowNums;
      // special chars and numbers
    }else if(!upInclude && !lowInclude && specInclude && numInclude){
      pass = numSpec;
      // just numbers
    } else if(!upInclude && !lowInclude && !specInclude && numInclude){
      pass = nums;
      // just special chars
    } else if(!upInclude && !lowInclude &&specInclude && !numInclude){
      pass = specialChar;
      // just lowercase
    }else if(!upInclude && lowInclude && !specInclude && !numInclude){
      pass = lowerCase;
    }else if(upInclude && !lowInclude && !specInclude && !numInclude){
      pass = upperCase;
    }
    for(var i =0;i<numChar;i++){
      var final = Math.floor(Math.random()*pass.length)
      passArray.push(pass[final]);
    }
     password = passArray.join('');
     window.alert("Your new password is: " + password);
  }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);