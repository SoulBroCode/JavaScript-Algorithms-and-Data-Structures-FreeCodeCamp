function destroyer(arr, ...filterArr) {
  return arr.filter((elem) => !filterArr.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
