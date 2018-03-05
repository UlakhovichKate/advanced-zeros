module.exports = function getZerosCount(number, base) {
  // your implementation
  
  var allPrimes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107,
        109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
        233, 239, 241, 251, 257
    ];
    var p = [];
    var a = [];
    var wholeBase = base;
    var nextPrimeIndex = 0;
    while (wholeBase > 1) {
        while (wholeBase % allPrimes[nextPrimeIndex] != 0) {
            nextPrimeIndex++;
        }
        p.push(allPrimes[nextPrimeIndex]);
        var pow = 0;
        while (wholeBase % allPrimes[nextPrimeIndex] == 0) {
            pow++;
            wholeBase /= allPrimes[nextPrimeIndex];
        }
        a.push(pow);
}
  
   var zeroNumber = number;

    for (var i = 0; i < p.length; ++i) {
        var sa = 0;
        var numberForDevide = number;

        while (numberForDevide / p[i] > 0) {
            sa += Math.floor(numberForDevide/p[i]);
            numberForDevide = Math.floor(numberForDevide/p[i]);
        }
        zeroNumber = Math.floor(Math.min(zeroNumber, sa/a[i]));
    }

return zeroNumber;
  
  
  /*let Arr = new Array;
  while (number/base !=0){
    ost=number%base;
    Arr.push(ost);
    number=number/base;
  }
  return Arr;*/
}
