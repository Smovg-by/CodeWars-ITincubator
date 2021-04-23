function Xbonacci(signature, n) {
  let resArr = [...signature];
  const initArrLength = signature.length;
  if (n > initArrLength) {
    for (let i = 0; i < n - initArrLength; i++) {
      let arrTail = resArr.slice(-initArrLength);
      resArr.push(
        arrTail.reduce(function (element, sum) {
          return (sum += element);
        })
      );
    }
    return resArr;
  } else {
    return resArr.slice(0, n);
  }
}
