let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=.*\d{2,}.*)/i; // Change this line
let result = pwRegex.test(sampleWord);
