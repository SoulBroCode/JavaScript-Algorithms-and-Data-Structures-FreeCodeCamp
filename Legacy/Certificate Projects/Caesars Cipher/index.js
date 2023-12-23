function rot13(str) {
  const ALPHABET_END = "Z".charCodeAt(0);
  const ALPHABET_START = "A".charCodeAt(0);

  const charList = str.split("");
  for (let i = 0; i < charList.length; i++) {
    const char = charList[i];
    if (!char.match(/\W/)) {
      let newCharInt = char.charCodeAt(0) + 13;
      if (newCharInt > ALPHABET_END) {
        newCharInt = ALPHABET_START + (newCharInt - ALPHABET_END - 1);
      }
      charList[i] = String.fromCharCode(newCharInt);
    }
  }

  return charList.join("");
}

console.log(rot13("SERR PBQR PNZC"));
