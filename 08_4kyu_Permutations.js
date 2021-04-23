// TASK DECRIPTION:

// In this kata you have to create all permutations of
// an input string and remove duplicates, if present. This means,
// you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab',

function permutations(input) {
  let permutArr = input.split("");
  let length = permutArr.length,
    result = [permutArr.slice().join("")],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutArr[i];
      permutArr[i] = permutArr[k];
      permutArr[k] = p;
      ++c[i];
      i = 1;
      result.push(permutArr.slice().join(""));
    } else {
      c[i] = 0;
      ++i;
    }
  }
  let resSet = new Set(result);
  return [...resSet];
}

// OTHER SOLUTIONS:

// function permutations(str) {
//   return str.length <= 1
//     ? [str]
//     : Array.from(
//         new Set(
//           str
//             .split("")
//             .map((char, i) =>
//               permutations(str.substr(0, i) + str.substr(i + 1)).map(
//                 (p) => char + p
//               )
//             )
//             .reduce((r, x) => r.concat(x), [])
//         )
//       );
// }



// function permutations(string) {
//   var s = string.split('').sort();
//   var res = [s.join('')]
//   while(true) {

//     var j = s.length - 2;
//     while (j != -1 && s[j] >= s[j + 1])
//       j--;
//     if(j == -1)
//       break;

//     var k = s.length - 1;
//     while(s[j] >= s[k])
//       k--;

//     [s[j], s[k]] = [s[k], s[j]];
//     var l = j + 1, r = s.length - 1;
//     while (l<r) {
//       [s[l], s[r]] = [s[r], s[l]];
//       l++;
//       r--;
//     }
//     res.push(s.join(''));
//   }
//   return res;
// }