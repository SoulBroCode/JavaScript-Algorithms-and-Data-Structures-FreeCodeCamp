function titleCase(str) {
  let splitWords = str.split(" ");
  for (let i = 0; i < splitWords.length; i++) {
    splitWords[i] =
      splitWords[i].charAt(0).toUpperCase() +
      splitWords[i].slice(1).toLowerCase();
  }

  return splitWords.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
