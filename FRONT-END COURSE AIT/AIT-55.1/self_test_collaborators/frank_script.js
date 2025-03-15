const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterPrimes(arr) {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
}

const result = filterPrimes(arr);
console.log(result);