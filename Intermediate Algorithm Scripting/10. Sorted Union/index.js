function uniteUnique(...arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const arrInArr = arr[i];
    for (let j = 0; j < arrInArr.length; j++) {
      const value = arrInArr[j];
      if (!newArr.includes(value)) {
        newArr.push(value);
      }
    }
  }

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
