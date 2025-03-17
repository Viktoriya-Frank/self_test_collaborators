// Solution 1 -> put array in Set (am shortest):

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Solution 2 -> use filter will be search first index with value:

function removeDuplicates1(arr) {
  return arr.filter((e, i) => arr.indexOf(e) === i);
}

console.log(removeDuplicates1([1, 2, 2, 3, 4, 4, 5]));

// Task 2

function mostFrequent(arr) {
  let frequent = {};
  let maxNum = -Infinity;
  let maxCount = 0;
  arr.forEach((e) => {
    frequent[e] = (frequent[e] || 0) + 1;
    if(frequent[e]>maxCount){
        maxNum =e;
        maxCount = frequent[e];
    }
  });
  return maxNum;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));

function groupByParity(arr) {
    return arr.reduce((acc, item) =>{
        if(item%2===0){
            acc[0].push(item); //gerade Zahlen in Arrey 1
        } else{
            acc[1].push(item); //ungerade Zahlen in Array 2
        }
        return acc;
    }, [[], []]);
}


console.log(groupByParity([1, 2, 3, 4, 5, 6]));


function filterPrimes(arr) {
  return arr.filter((e) => {
    if (e < 2) return false;
    for (let i = 2; i < e; i++) {
      if (e % i === 0) return false;
    }
    return true;
  });
}

console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const array = [10, 15, 8, 3, 6];
//function changed original because I use copy of array
function sortByDivisors(arr) {
  return [...arr].sort((a, b) => {
    let numberA = 0;
    let numberB = 0;

    for (let i = 1; i <= a; i++) {
      if (a % i === 0) numberA++;
    }
    for (let i = 1; i <= b; i++) {
      if (b % i === 0) numberB++;
    }
    return numberA-numberB;
  });
}

const sortedArray = sortByDivisors(array);
console.log ("sorted array:", sortedArray);
console.log( "original:", array);

