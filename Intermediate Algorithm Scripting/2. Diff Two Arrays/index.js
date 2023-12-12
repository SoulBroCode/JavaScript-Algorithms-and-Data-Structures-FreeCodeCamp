function diffArray(arr1, arr2) {
  function diff(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}

diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5]);
