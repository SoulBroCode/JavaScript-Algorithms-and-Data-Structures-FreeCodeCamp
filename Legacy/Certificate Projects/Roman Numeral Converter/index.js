function convertToRoman(num) {
  const RomanNumeralDict = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";
  while (num > 0) {
    for (let [key, value] of Object.entries(RomanNumeralDict)) {
      if (num >= value) {
        romanNumeral += key;
        num -= value;

        break;
      }
    }
  }

  return romanNumeral;
}

convertToRoman(36);
