//  get the button element with the ID "check-btn"
const checkButton = document.getElementById("check-btn");

// get the input element with the ID "text-input"
const input = document.getElementById("text-input");

// get the element with the ID "result"
const result = document.getElementById("result");

// define a function called handleCheckButton
const handleCheckButton = () => {
    // check if the input value is empty
  if (input.value === "") {
    // if it is, show an alert
    alert("Please input a value");
  } else {
    // if it is not, call the checkPalindrome function
    checkPalindrome(input.value);
  }
};
// add an event listener to the button to call the handleCheckButton function
checkButton.addEventListener("click", handleCheckButton);

// define a function called checkPalindrome
const checkPalindrome = (string) => {
    // remove all non-alphanumeric characters and convert the string to lowercase
  const cleanedString = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // reverse the cleaned string
  const reversedString = cleanedString.split("").reverse().join("");

  // check if the cleaned string is equal to the reversed string
  const isPalindrome = cleanedString === reversedString;

  // if it is, display a message that the string is a palindrome
  // if it is not, display a message that the string is not a palindrome
  result.innerHTML = isPalindrome ? `${string} is a palindrome` : `${string} is not a palindrome`;
  result.classList.remove("hidden");
};
 