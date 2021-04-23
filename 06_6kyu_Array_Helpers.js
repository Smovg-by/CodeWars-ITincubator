// TASK DESCRIPTION:

// This kata is designed to test your ability to extend the functionality
// of built-in classes. In this case, we want you to extend the built-in
// Array class with the following methods: square(), cube(), average(),
// sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array
// must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

//let`s add a new functions(methods) to a global Array prototype

Array.prototype.square = function () {
  return this.map(function (elem) {
    return Math.pow(elem, 2);
  });
};

Array.prototype.cube = function () {
  return this.map(function (elem) {
    return Math.pow(elem, 3);
  });
};

Array.prototype.sum = function () {
  return this.reduce(function (elem, acc) {
    return (acc += elem);
  });
};

Array.prototype.average = function () {
  if (this.length === 0) {
    return NaN;
  } else {
    return (
      this.reduce(function (elem, acc) {
        return (acc += elem);
      }) / this.length
    );
  }
};

Array.prototype.even = function () {
  return this.filter(function (elem) {
    return elem % 2 === 0;
  });
};

Array.prototype.odd = function () {
  return this.filter(function (elem) {
    return elem % 2 !== 0;
  });
};
