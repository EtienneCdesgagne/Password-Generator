// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {  
var userChoice = prompt("How many Characters would you like (8-128)");
var lengthAsNum = parseInt(length);


if (Number.isNaN(lengthAsNum)) {
  alert("Must be a number");
  return;
}

var UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "1234567890";
var Symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

var randomnumber = Math.floor(Math.random()*combination.length)

var combination = UppercaseLetters+Lowercaseletters+Numbers+Symbols

var password= combination


// var password = generatePassword(); 
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
