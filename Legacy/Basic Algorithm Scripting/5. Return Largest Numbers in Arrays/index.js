function largestOfFour(arr) {
  let newArr = [];

  arr.forEach((i) => {
    let largetNum = i[0];
    i.forEach((j) => {
      if (largetNum < j) {
        largetNum = j;
      }
    });
    newArr.push(largetNum);
  });
  console.log(newArr);
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
