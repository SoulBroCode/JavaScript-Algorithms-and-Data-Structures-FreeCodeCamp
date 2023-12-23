// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, name) {
  const copyArr = [...bookList];
  copyArr.push(name);

  return copyArr;
  // Change code above this line
}

// Change code below this line
function remove(bookList, name) {
  const copyArr = [...bookList];
  const book_index = copyArr.indexOf(name);
  if (book_index >= 0) {
    copyArr.splice(book_index, 1);
    return copyArr;

    // Change code above this line
  }
}
