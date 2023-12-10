function mutation(arr) {
  const wordTwo = arr[1].toLowerCase();
  const wordOne = arr[0].toLowerCase();
  for (let i = 0; i < wordTwo.length; i++) {
    if (wordOne.indexOf(wordTwo[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
