function dropElements(arr, func) {
  let reachCondition = false;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (reachCondition) {
      newArr.push(value);
    } else if (func(value)) {
      reachCondition = true;
      newArr.push(value);
    }
  }

  return newArr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
