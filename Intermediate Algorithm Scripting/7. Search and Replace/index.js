function myReplace(str, before, after) {
  const regexTest = /^[A-Z]/;

  let after_ = regexTest.test(before)
    ? after.substring(0, 1).toUpperCase() + after.substring(1, after.length)
    : after.substring(0, 1).toLowerCase() + after.substring(1, after.length);

  return str.replace(before, after_);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
