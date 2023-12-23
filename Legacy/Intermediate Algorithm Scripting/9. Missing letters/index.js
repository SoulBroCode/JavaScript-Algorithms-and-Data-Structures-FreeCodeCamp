function fearNotLetter(str) {
  const charArr = str.split("").map((char) => char.charCodeAt(0));
  const min = Math.min(...charArr);
  const max = Math.max(...charArr);

  for (let i = min; i < max; i++) {
    if (!charArr.includes(i)) {
      return String.fromCharCode(i);
    }
  }
  return undefined;
}
