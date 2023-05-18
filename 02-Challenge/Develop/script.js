// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {  
var userChoice = window.prompt("How many Characters would you like (8-132)");
var passwordlength = parseInt(userChoice);

if (Number.isNaN(passwordlength)) {
  alert("Must be a number");
  return;
}

var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

var password= '';



var combination = lowercaseletters + uppercaseletters + numbers + symbols
for (var i = 0; i < passwordlength; i++) {
  var randomnumber = Math.floor(Math.random()*combination.length)
  password = password+combination[randomnumber]
}
// var password = generatePassword(); 
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
