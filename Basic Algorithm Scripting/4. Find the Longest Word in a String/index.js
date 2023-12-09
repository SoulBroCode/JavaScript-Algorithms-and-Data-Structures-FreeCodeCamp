function findLongestWordLength(str) {
  const splitStr = str.split(" ");
  let longestStr = "";
  splitStr.forEach((element) => {
    if (longestStr.length < element.length) longestStr = element;
  });
  return longestStr.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
