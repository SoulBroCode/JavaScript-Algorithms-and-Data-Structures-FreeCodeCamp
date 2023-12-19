function palindrome(str) {
  const strArr = str.toLowerCase().split("");
  let nonAlphabetRegex = /\W|_/g; // Change this line
  const toRemoveResult = str.match(nonAlphabetRegex);

  const newStr =
    toRemoveResult !== null
      ? strArr.filter((el) => !toRemoveResult.includes(el))
      : str;
  console.log(newStr);

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
