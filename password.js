let password = "Yoriyori1!"
let lowerCaseLetters = /[a-z]/;
let upperCaseLetters = /[A-Z]/;
let number = /[0-9]/;
let specialChar = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
if(password.length >= 10 && lowerCaseLetters.test(password) && number.test(password) && upperCaseLetters.test(password) && specialChar.test(password)) {
    console.log("Password Accepted :) ")
} else {console.log("Try a Different Password")}