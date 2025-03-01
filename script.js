const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");
const isPalindrome = true;

const handleCheckButton = () => {
  if (input.value === "") {
    alert("Please input a value");
  } else {
    checkPalindrome(input.value);
  }
};
checkButton.addEventListener("click", handleCheckButton);

const checkPalindrome = (string) => {
  const cleanedString = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedString = cleanedString.split("").reverse().join("");
  const isPalindrome = cleanedString === reversedString;

  if (isPalindrome) {
    result.innerHTML = `${string} is a palindrome`;
    result.classList.remove("hide");
  } else {
    result.innerHTML = `${string} is not a palindrome`;
}
result.classList.remove("hide");
};
