// TASK DESCRIPTION:
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents,
// cents need to be truncated to 2 decimals, in the case that the decimal part of the number
// is 1 character long or none you should add 0's so that the result will always have 2 decimal
// characters, the function will also evaluate negative numbers.
//
// function should return a string 'NaN' if the input is not a valid number


var numberToPrice = function (number) {

  let num = number;
  if (isNaN(Number(num))) { // return "NaN' if input value is not a number
    return 'NaN'
  }
  let numArr = num.toString().split('');
  let pointIndex = numArr.indexOf('.');
  let resArr = [];
  let counter = 1;
  if (pointIndex !== -1) { // floating point convertion script
    for (let i = (pointIndex + 2), counter = -1; i >= 0; i--) {
      counter++;
      if (counter % 3 === 0 && counter !== 3 && numArr[i] !== '-' && numArr[i - 2] !== '.') {
        resArr.push(',');
      }
      numArr[i] === undefined ? resArr.push('0') :
        resArr.push(numArr[i]);
    }
  } else { // no floating point on input convertion script
    numArr.push('.00');
    for (let k = (numArr.length - 1); k >= 0; k--) {
      counter++;
      if (counter % 3 === 0 && counter !== 3 && numArr[k] !== '-') {
        resArr.push(',');
      }
      resArr.push(numArr[k]);
    }
  }
  return resArr.reverse().join('');
}


//OTHER SOLUTIONS:
//
//   function numberToPrice(number) {
//     if (isNaN(number) || number === '') {
//       return NaN.toString();
//     }
//     let sign = (number < 0 ? '-' : '');
//     number = Math.abs(number).toFixed(3).slice(0, -1);
//     let chars = number.toString().split('');
//     for (let i = chars.length - 6; i > 0; i -= 3) {
//       chars.splice(i, 0, ',');
//     }
//     return sign + chars.join('');
// }
//
// var numberToPrice = function(number) {
//   if (!Number(number)) return 'NaN';
//   return Number(number.toString().split('.').map((v,i) => {
//     if (i == 1) {
//       return v.slice(0,2);
//     } else {
//       return v;
//     }
//   }).join('.')).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
// }
