function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > size) {
    newArr.push(arr.splice(0, size));
  }
  newArr.push(arr);
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
