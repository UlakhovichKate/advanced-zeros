module.exports = function getZerosCount(number, base) {
  // your implementation
  let Arr = new Array;
  while (number/base !=0){
    ost=number%base;
    Arr.push(ost);
    number=number/base;
  }
  return Arr;
}
