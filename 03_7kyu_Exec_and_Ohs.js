// TASK DESCRIPTION

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let testStr = str.toUpperCase();
  let resObj = {};
  for (let value of testStr) {
    if (resObj[value] === undefined) {
      resObj[value] = 1;
    } else {
      resObj[value]++;
    }
  }
  if (resObj["X"] !== resObj["O"]) {
    return false;
  } else {
    return true;
  }
}

// OTHER SOLUTIONS:

// - RegExp:

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// -convert to array and NodeFilter:

// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }