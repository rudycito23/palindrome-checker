const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");
const isPalindrome = true;

const handleCheckButton = () => {
  if (input.value === "") {
    alert("Please enter a value");
  } else {
    checkPalindrome(input.value);
  }
};
checkButton.addEventListener("click", handleCheckButton);

const checkPalindrome = (string) => {
  const singleLetter = string.length === 1 ? true : false;
  const reversedString = string.split("").reverse().join("");
  const isPalindrome = string === reversedString ? true : false;

  if (singleLetter || isPalindrome) {
    result.innerHTML = `${string} is a palindrome`;
    result.classList.remove("hide");
  }
};
