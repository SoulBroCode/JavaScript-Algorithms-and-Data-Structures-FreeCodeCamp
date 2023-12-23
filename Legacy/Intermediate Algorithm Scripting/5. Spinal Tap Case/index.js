function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  console.log(str);

  return str.replace(/\s+|_+/g, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
