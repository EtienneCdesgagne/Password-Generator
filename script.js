var generateBtn = document.querySelector("#generate");

function generatePassword() {  

  // variables for prompts
var lowercase = false;
var uppercase = false;
var number    = false;
var symbol    = false;

  // prompts for Password generation
var userChoice = prompt("How many Characters would you like (8-128)");

var lengthasnum = parseInt(userChoice) 
 //Error messages and returns for invalid inputs
if (Number.isNaN(lengthasnum)) {
  alert("Must be a number");
  return;
}
if (lengthasnum < 8) {
  alert ("Password length must be at least 8 characters");
  return;
}
if (lengthasnum > 128) {
  alert ("Password length cannot exceed 128 characters");
  return;
}
 //yes no prompts
var lowercase = confirm("Would you like to include lowercase letters");
var uppercase = confirm("Would you like to include uppercase letters");
var number = confirm("Would you like to include numbers");
var symbol = confirm("Would you like to include symbols");

if (lowercase==0 & uppercase==0 & number== 0 & symbol == 0){
  alert ("You must select at least 1 character type")
}

var randomcharacter = ""

var lengthasnum = parseInt(userChoice) 


 //library for master string of all potential characters selected from promps
var UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "1234567890";
var Symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

 //master string of all character sets
var combination = "";
if (lowercase == true) {
  combination += Lowercaseletters;
}
if (uppercase == true) {
  combination += UppercaseLetters;
}
if (number == true) {
  combination += Numbers;
}
if (symbol == true) {
  combination += Symbols;
}


 //random number generation based from potential combination length
var randomnumber = Math.floor(Math.random()*combination.length)

var password= ""

 //loop for based on user input password length 
for ( i = 0; i < userChoice; i++) {
  var randomnumber = Math.floor(Math.random()*combination.length)
password += combination.charAt (randomnumber);
}

var passwordText = document.querySelector("#password");

passwordText.value = password;
}

generateBtn.addEventListener("click", generatePassword);
