// TASK DESCRIPTION:

// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let duplicateObj = {};

  for (let char of string) {
    console.log(char);
    if (duplicateObj[char] === undefined) {
      duplicateObj[char] = 1;
    } else {
      duplicateObj[char]++;
      console.log(`duplicates`);
    }
  }
  return duplicateObj;
}
