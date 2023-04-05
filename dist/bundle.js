/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ (() => {

eval(" \r\n localStorage.clear()\r\n\r\n//  DOM element Manipulations \r\n const form=document.getElementById(\"form_controller\");\r\n const firstnamecheck = document.querySelector(\".first-span\");\r\n const lastNameCheck = document.querySelector(\".lastname-span\");\r\n const emailCheck = document.querySelector(\".email-span\");\r\n const phonenumber = document.querySelector(\".number-span\");\r\n const studentNumberSelector = document.querySelector(\".studentnumber-span\");\r\n const dateOfBirthChecker = document.querySelector(\".dateofbirth-span\");\r\n const firstPasswordLength = document.querySelector(\".studentpassword-span\");\r\n const secondPasswordlength =document.querySelector(\".studentsecondpassword-span\");\r\n const passwordconfirmer = document.querySelector(\".studentmain-span\");\r\n const googlesignIn = document.querySelector(\".g-signin2\");\r\n const terms = document.querySelector(\".terms\");\r\n const popUp = document.querySelector(\".popup-wrapper\");\r\n const popClose = document.querySelector(\".popup-close\")\r\n \r\n\r\n //  setting the GEOlocation API\r\nif(navigator.geolocation)\r\nnavigator.geolocation.getCurrentPosition(function(){\r\n    console.log(\"Your Position has been dervied \")\r\n},function(){\r\n    alert(\"Your position could not be derived\")\r\n})\r\n\r\n // regex tester for firstname and lastname\r\n const firstnamepattern = /^[a-zA-Z]{1,}$/ \r\n // regex tester for email \r\n const emailchecker = /^.{4,}$/\r\n//regex tester for phone number\r\nconst phonenumberchecker = /^[0-9]{6,}$/ \r\n//regex tester for studentnumber \r\nconst studentNumber = /^[0-9]{0,8}$/ \r\n//regex testerfor date of birth\r\nconst DOB = /^.{1,12}$/ \r\n//regex tester for password \r\nconst firstPassword = /^.{1,}$/\r\n//regex tester for confirmingpassword \r\nconst secondpasswordChecker = /^.{1,}$/\r\n\r\nfunction TestRegexPatterns(){\r\n// regex expression for firstname\r\n     //regex expression using ternary operator for the \r\n     firstnamepattern.test(form.firstname.value) ?  firstnamecheck.style.display = \"none\" :firstnamecheck.style.display = \"inline\" ;\r\n    //  regex expression for lastname value \r\n    firstnamepattern.test(form.inputLastName.value)? lastNameCheck.style.display = \"none\"  : lastNameCheck.style.display = \"inline\"\r\n    //regex expression for testing emails\r\n    emailchecker.test(form.inputemail.value)?emailCheck.style.display=\"none\":emailCheck.style.display=\"inline\"\r\n    //regex expression for phone number\r\n    phonenumberchecker.test(Number(form.inputPhonenumber.value))? phonenumber.style.display = \"none\": phonenumber.style.display =\"inline\"\r\n    //regex expression for testing student number \r\n    studentNumber.test(form.inputStudentIDnumber.value) ? studentNumberSelector.style.display = \"none\" :studentNumberSelector.style.display = \"inline\" \r\n    //regex expression for Date of Birth \r\n    DOB.test(form.inputdateofbirth.value)? dateOfBirthChecker.style.display =\"none\": dateOfBirthChecker.style.display =\"inline\"\r\n    //regex expression for first and second password \r\n    firstPassword.test(form.inputfirstpassword.value) ? firstPasswordLength.style.display = \"none\": firstPasswordLength.style.display = \"inline\"\r\n    // for testing the password length \r\n    secondpasswordChecker.test(form.inputconfirmpassword.value) ? secondPasswordlength.style.display = \"none\": secondPasswordlength.style.display = \"inline\"\r\n    //testing for confirming both first and second password \r\n    form.inputfirstpassword.value !== form.inputconfirmpassword.value ? passwordconfirmer.style.display = \"inline\":passwordconfirmer.style.display = \"none\"\r\n}\r\n\r\n\r\n// setting event listeners \r\n //adding prevent default to the form to prevent its default behavior\r\n //seting validation for the input fields in the form \r\n //adding regex expression to the code \r\nform.addEventListener(\"submit\",(e)=>{e.preventDefault()\r\n    TestRegexPatterns()\r\n\r\n\r\n    return form.reset()\r\n})\r\n\r\n\r\n\r\nfunction settingLocalStorage(){\r\n//setting of data from the user input for local storage \r\nconst localFirstName= form.firstname.value.trim();  \r\nconst localSecondName =form.inputLastName.value.trim();\r\nconst localEmail = form.inputemail.value.trim()\r\nconst localStudentIdNumber = form.inputStudentIDnumber.value.trim()\r\nconst localfirstpassword = form.inputfirstpassword.value.trim()\r\nconst localsecondpasssword = form.inputconfirmpassword.value.trim()\r\n\r\n//setting up local storage using local storage API \r\n//setting up the object for obtaining data from users \r\n let userInput = [{\r\n    \"firstname\":localFirstName,\r\n    \"secondname\": localSecondName,\r\n    \"email\":localEmail,\r\n    \"student Number\":localStudentIdNumber,\r\n    \"firstpassword\":localfirstpassword,\r\n    \"secondpassword\":localsecondpasssword\r\n }]\r\n\r\n //stringify the localstorage API data to store in browser\r\n let inputs = JSON.stringify(userInput)\r\n\r\n //using the localstorage function to setItems in the local storage \r\n\r\n    return localStorage.setItem(\"itemsStr\", inputs)\r\n\r\n   \r\n}\r\n//looping over the userinput to reset values put  \r\n\r\nsettingLocalStorage()\r\n\r\n\r\n//setting up a pop-up modal for the read here section \r\nterms.addEventListener(\"click\", ()=>{\r\n    popUp.style.display =\"block\"\r\n})\r\n\r\n//closing the popup bar by using the X element \r\n\r\npopClose.addEventListener(\"click\", ()=>{\r\n    popUp.style.display =\"none\"\r\n})\r\n\r\n\r\n//adding google sign up using google authorization and authentication API  for signing in and signing out  \r\n\r\n//please when hosting on google sign up , do not forget to rework your domain setting in your goolge sign up \r\n\r\n// adding firbase to the code base for backend \r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://complete-library-2/./src/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/register.js"]();
/******/ 	
/******/ })()
;