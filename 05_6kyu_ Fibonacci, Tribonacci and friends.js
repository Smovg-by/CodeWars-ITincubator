function Xbonacci(signature, n) {
  let resArr = [...signature];
  const initArrLength = signature.length;
  while (resArr.length !== n) {
    let arrTail = resArr.slice(-initArrLength);
    resArr.push(
      arrTail.reduce(function (element, sum) {
        return (sum += element);
      })
    );
  }
  return resArr;
}
