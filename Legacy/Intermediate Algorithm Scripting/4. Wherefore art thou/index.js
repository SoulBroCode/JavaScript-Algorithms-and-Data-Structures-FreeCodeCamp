function whatIsInAName(collection, source) {
  return collection.filter((item) => {
    let hasSamePropertyAndValue = true;
    for (let property in source) {
      if (
        !(item.hasOwnProperty(property) && item[property] === source[property])
      ) {
        hasSamePropertyAndValue = false;
      }
    }
    return hasSamePropertyAndValue;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
