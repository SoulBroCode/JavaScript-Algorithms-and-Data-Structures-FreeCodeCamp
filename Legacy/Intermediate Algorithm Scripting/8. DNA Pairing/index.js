function pairElement(str) {
  const charList = str.split("");

  const newArr = [];

  for (let i = 0; i < charList.length; i++) {
    const DNAArr = [];
    const char = charList[i];

    DNAArr.push(char);
    switch (char) {
      case "A":
        DNAArr.push("T");
        break;
      case "T":
        DNAArr.push("A");
        break;
      case "C":
        DNAArr.push("G");
        break;
      case "G":
        DNAArr.push("C");
        break;
    }
    newArr.push(DNAArr);
  }
  return newArr;
}

pairElement("GCG");
