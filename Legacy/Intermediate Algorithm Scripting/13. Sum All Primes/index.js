function sumPrimes(num) {
  function isPrime(num_) {
    for (let factor = 2; factor < num_; factor++) {
      if (num_ % factor === 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}

sumPrimes(10);
